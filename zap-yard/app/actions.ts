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
    }
}