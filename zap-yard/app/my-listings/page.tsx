import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db";
import { redirect } from "next/navigation";
import { NoItems } from "@/components/noitems";
import { ListingCard } from "@/components/listingcard";

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
    return data; 
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
              {data.length === 0 ? (
                  <NoItems description="Create a ZapYard listing and start earning today." title="You have no listings" />
              ) : (
                      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 mt-8">
                          {data.map((item) => (
                              <ListingCard
                                  key={item.id}
                                  description={item.description as string}
                                  location={item.country as string}
                                  price={item.price as number}
                                  userId={user.id}
                                  favouriteId={item.Favourite[0]?.id as string}
                                  isInFavouriteList={item.Favourite.length > 0 ? true : false}
                                  locationId={item.id as string}
                                  pathName="/my-listings"
                                  imagePath={item.photo as string}
                              />
                          ))}
                </div>      
              )}
          </section>
      </div>
  )
}
