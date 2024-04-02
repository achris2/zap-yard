"use server"

import { redirect } from "next/navigation";
import prisma from "./lib/db"

export async function CreateListing({userId}: {userId: string}) {
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
    } else if (!data.addedCategory && !data.addedDescription && !data.addedLocation) {
        return redirect(`/create/${data.id}/structure`);
    } else if (data.addedCategory && !data.addedDescription) {
        return redirect(`/create/${data.id}/description`);
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
            addedCategory: true
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
}