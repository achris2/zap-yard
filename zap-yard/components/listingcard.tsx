import { useCountries } from "@/app/lib/getcountries";
import Image from "next/image";
import Link from "next/link";



interface iAppProps{
    imagePath: string;
    description: string;
    location: string;
    price: number; 
    userId: string | undefined; 

};

export function ListingCard({ imagePath, description, location, price, userId }: iAppProps) {
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
                  <div>
                  <p>Testing</p>
              </div>)}
          </div>
          <Link href={"/"} className="mt-3">
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
