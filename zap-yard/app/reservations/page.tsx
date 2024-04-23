import { ListingCard } from "@/components/listingcard";
import { NoItems } from "@/components/noitems";
import prisma from "../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
    noStore();
    const data = await prisma.reservation.findMany({
        where: {
            userId: userId,

        },
        select: {
            Location: {
                select: {
                    photo: true,
                    id: true,
                    Favourite: {
                        where: {
                            userId: userId,
                        },
                    },
                    price: true,
                    description: true,
                    country: true,
                },
            },

        },
    });

    return data;
}

export default async function ReservationRoute() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) return redirect("/");
    const data = await getData(user?.id); 
    return (
        <section className="container mx-auto px-5 lg:px-10 mt-10 mb-10">
        <h2 className="text-3xl font-semibold tracking-tight mb-5">
            Your reserved Zap Yards
        </h2>

        {data.length === 0 ? (
            <NoItems title="You do not have any reservations." description="Reserve a Zap Yard to get started."/>
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
                            favouriteId={item.Location?.Favourite[0]?.id as string}
                            isInFavouriteList={item.Location?.Favourite.length as number > 0 ? true : false}

                        />
                    )
                    
                    )}
                </div>
        )}
    </section>
    )
}