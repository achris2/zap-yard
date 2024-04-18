import { useCountries } from "@/app/lib/getcountries";
import Image from "next/image";
import Link from "next/link";
import { AddToFavouriteButton, DeleteFromFavourites } from "./submitbutton";
import { AddToFavourites, RemoveFromFavourites } from "@/app/actions";


interface iAppProps{
    imagePath: string;
    description: string;
    location: string;
    price: number; 
    userId: string | undefined; 
    isInFavouriteList: boolean;
    favouriteId: string; 
    locationId: string; 
    pathName: string; 

};

export function ListingCard({
    imagePath,
    description,
    location,
    price,
    userId,
    favouriteId,
    isInFavouriteList,
    locationId,
    pathName,
}: iAppProps) {
    const { getCountryByValue } = useCountries(); 
    const country = getCountryByValue(location); 
  return (
      <div className="flex flex-col">
          <div className="relative h-72">
              <Image
                  src={`https://imnaypnzvatjbonhywqy.supabase.co/storage/v1/object/public/images/${imagePath}`}
                  alt="Photo of Charger"
                  fill
                  className="rounded-lg h-full object-cover"
              />
              {userId && (
                  <div className="z-10 absolute top-2 right-2">
                      {isInFavouriteList ? (
                          <form action={RemoveFromFavourites}>
                              <input type="hidden" name="favouriteId" value={favouriteId} />
                              <input type="hidden" name="userId" value={userId} />
                              <input type="hidden" name="pathName" value={pathName} />
                          <DeleteFromFavourites /> 
                          </form>
                      ) : (
                              <form action={AddToFavourites}>
                                  <input type="hidden" name="locationId" value={locationId}/>
                                  <input type="hidden" name="userId" value={userId} />
                                  <input type="hidden" name="pathName" value={pathName} />
                                  <AddToFavouriteButton />
                              </form>
                      )}
                  </div>
              )}
          </div>
          <Link href={`/listing/${locationId}`} className="mt-3">
              <h3 className="font-medium text-base">
                  {country?.flag}{country?.label} / {country?.region}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
              <p className="pt-2 text-muted-foreground">
              <span className="font-medium text-black">£{price}</span> per hour
              </p>
          </Link>
      </div>
  )
}
