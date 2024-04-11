import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "../lib/db"
import { redirect } from "next/navigation";
import { NoItems } from "@/components/noitems";
import { ListingCard } from "@/components/listingcard";

async function getData(userId: string) {
    const data = await prisma.favourite.findMany({
        where: {
            userId: userId,
        },
        select: {
            Location: {
                select: {
                    photo: true,
                    id: true,
                    Favourite: true,
                    price: true,
                    description: true,
                    country: true,
                }
            }
        },
    }); 
    return data; 
}

export default async function FavouriteRoute() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) return redirect("/"); 
    const data = await getData(user.id);


    return (
        <section className="container mx-auto px-5 lg:px-10 mt-10 mb-10">
            <h2 className="text-3xl font-semibold tracking-tight mb-5">
                Your favourite Zap Yards
            </h2>

            {data.length === 0 ? (
                <NoItems title="You do not have any favourites" description="Create a shortlist of your favourite Zap Yards"/>
            ) : (
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8">
                        {data.map((item) => (
                            <ListingCard
                                key={item.Location?.id}
                                description={item.Location?.description as string}
                                location={item.Location?.country as string}
                                pathName="/favourites"
                                locationId={item.Location?.id as string}
                                imagePath={item.Location?.photo as string}
                                price={item.Location?.price as number}
                                userId={user.id}
                                favouriteId={item.Location?.Favourite[0].id as string}
                                isInFavouriteList={item.Location?.Favourite.length as number > 0 ? true : false}

                            />
                        )
                        
                        )}
                    </div>
            )}
        </section>
    )
}
