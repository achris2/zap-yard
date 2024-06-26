"use server"

import { redirect } from "next/navigation";
import prisma from "./lib/db";
import { supabase } from "./lib/supabase";
import { revalidatePath } from "next/cache";

export async function CreateListing({ userId }: { userId: string }) {
    const data = await prisma.location.findFirst({
        where: {
            userId: userId
        },
        orderBy: {
            createdAT: "desc",
        }
    });

    if (data === null) {
        const data = await prisma.location.create({
            data: {
                userId: userId,
            },
        });
        return redirect(`/create/${data.id}/structure`);
    } else if (
        !data.addedCategory &&
        !data.addedDescription &&
        !data.addedLocation
    ) {
        return redirect(`/create/${data.id}/structure`);
    } else if (data.addedCategory && !data.addedDescription) {
        return redirect(`/create/${data.id}/description`);
    } else if (data.addedCategory && data.addedDescription && !data.addedLocation) {
        return redirect(`/create/${data.id}/address`);
    } else if (data.addedLocation && data.addedDescription && data.addedLocation) {
        const data = await prisma.location.create({
            data: {
                userId: userId,
            },
        })
        return redirect(`/`);
    }
}

    export async function createCategoryPage(formData: FormData) {
        const categoryName = formData.get("categoryName") as string;
        const locationID = formData.get("locationId") as string;

        const data = await prisma.location.update({
            where: {
                id: locationID,
            },
            data: {
                categoryName: categoryName,
                addedCategory: true,
            },
        });

        return redirect(`/create/${locationID}/description`)
    }

    export async function CreateDescription(formData: FormData) {
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const price = formData.get("price");
        const imageFile = formData.get("image") as File;
        const noOfChargers = formData.get("numberOfChargers") as string;
        const locationId = formData.get('locationId') as string;

        const { data: imageData } = await supabase.storage.from('images').upload(`${imageFile.name}-${new Date()}`, imageFile, {
            cacheControl: '2592000',
            contentType: 'image/png',
        });

        const data = await prisma.location.update({
            where: {
                id: locationId,
            },
            data: {
                title: title,
                description: description,
                price: Number(price),
                chargerquantity: noOfChargers,
                photo: imageData?.path,
                addedDescription: true,
            }
        });
        return redirect(`/create/${locationId}/address`);
    }

export async function createLocation(formData: FormData) {
    const locationId = formData.get("locationId") as string;
    const countryValue = formData.get("countryValue") as string;
    const data = await prisma.location.update({
        where: {
            id: locationId,
        },
        data: {
            addedLocation: true,
            country: countryValue,
        },
        
    });
    return redirect(`/create/${locationId}/address`);
}

export async function AddToFavourites(formData: FormData) {
    const locationId = formData.get("locationId") as string;
    const userId = formData.get("userId") as string;
    const pathName = formData.get("pathName") as string;

    const data = await prisma.favourite.create({
        data: {
            locationId: locationId,
            userId: userId, 
        }, 
    });

    revalidatePath(pathName);
} 

export async function RemoveFromFavourites(formData: FormData) { 

    const favouriteId = formData.get('favouriteId') as string; 
    const pathName = formData.get("pathName") as string;
    const userId = formData.get("userId") as string;

    const data = await prisma.favourite.delete({
        where: {
            id: favouriteId,
            userId: userId,
        },
    });

    revalidatePath(pathName);
}

export async function CreateReservation(formData: FormData) {
    const userId = formData.get("userId") as string;
    const locationId = formData.get("locationId") as string;
    const startDate = formData.get("startDate") as string;
    const endDate = formData.get("endDate") as string;


    const data = await prisma.reservation.create({
        data: {
            userId: userId,
            locationId: locationId,
            startDate: startDate,
            endDate: endDate,
        },
    });

    return redirect("/")
}