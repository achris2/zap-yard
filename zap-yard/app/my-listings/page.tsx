import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { redirect } from "next/navigation";

async function getData(userId: string) {
    const data = await prisma.location.findMany({
        where: {
            userId: userId, 
            addedCategory: true,
            addedLocation: true,
            addedDescription: true,
        }, 
        select: {
            id: true, 
            country: true,
            photo: true,
            description: true,
            price: true,
            Favourite: {
                where: {
                    userId: userId, 
                }, 
            }
        }, 
        orderBy: {
            createdAT: "desc",
        },
    });
    
}

export default async function MyListings() {
    const { getUser } = getKindeServerSession(); 
    const user = await getUser();
    if (!user) {
        return redirect("/");
    }    
    const data = await getData(user?.id); 
  return (
      <div>
          <section className="container mx-auto px-5 lg:px-10 mt-10">
              <h2 className="text-3xl font-semibold tracking-tight mb-5">
                  Your listings
              </h2>
          </section>
      </div>
  )
}
