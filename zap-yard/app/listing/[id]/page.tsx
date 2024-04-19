/* eslint-disable @next/next/no-img-element */
import prisma from "@/app/lib/db"; 
import { useCountries } from "@/app/lib/getcountries";
import { BookingCalendar } from "@/components/bookingcalendar";
import { ShowCategory } from "@/components/showcategory";
import { ShowMap } from "@/components/showmap";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";


async function getData(locationId: string) {
    const data = await prisma.location.findUnique({
        where: {
            id: locationId,
        },
        select: {
            photo: true,
            description: true,
            categoryName: true,
            country: true,
            price: true,
            id: true,
            title: true,
            chargerquantity: true,
            User: {
                select: {
                    profileImage: true,
                    firstName: true, 
                    
                }
            }
        },
    }); 
    return data;
}


export default async function ListingRoute({params}: {params: {id : string}}) {
    const data = await getData(params.id);
    const { getCountryByValue } = useCountries(); 
    const country = getCountryByValue(data?.country as string);
  return (
      <div className="w-[75%] mx-auto mt-10 mb-12">
          <h1 className="font-medium text-2xl mb-5">{data?.title}</h1>
          <div className="relative h-[550px]">
              <Image
                  src={`https://imnaypnzvatjbonhywqy.supabase.co/storage/v1/object/public/images/${data?.photo}`}
                  alt="Photo of ZapYard"
                  fill
                  className="rounded-lg h-full object-cover w-full"
              />
          </div> 
              <div className="flex justify-between gap-x-24 mt-8">
                  <div className="w-2/3">
                      <h3 className= "text-xl font-medium">
                          {country?.flag} / {country?.label} / {country?.region}
                          </h3>
                      <div className="flex gap-x-2 text-muted-foreground">
                          <p>
                              {data?.chargerquantity} charger(s)
                          </p> 
                          *
                          <p>£{data?.price} per charger, per hour</p>
                      </div>
                      <div className="flex items-center mt-6">
                          <img src={data?.User?.profileImage ?? "@/anonuser.webp"} alt="User Profile Picture"
                          className="w-11 h-11 rounded-full"
                          />
                          <div className="flex flex-col ml-4">
                          <h3 className="font-medium">ZapYard by {data?.User?.firstName}</h3>
                          </div>
                  </div>

                  <Separator className="my-7" />
                  
                  <ShowCategory categoryName={data?.categoryName as string} />
                  
                  <Separator className="my-7" />

                  <p className="text-muted-foreground">{data?.description}</p>
                  
                  <Separator className="my-7" />

                  <ShowMap locationValue={country?.value as string} />
              
              </div>
              
              <BookingCalendar />
          
          </div>
          </div>
  )
}
