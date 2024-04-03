"use client"

import { CreateLocation } from "@/app/actions";
import { useCountries } from "@/app/lib/getcountries";
import { ListingFooter } from "@/components/listingFooter";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function AddressRoute({ params }: { params: { id: string } }) {
    
    const { getAllCountries } = useCountries();
    const [locationValue, setLocationValue] = useState("");
    const LazyMap = dynamic(() => import('@/components/map'), {
        ssr: false, 
        loading: () => <Skeleton className="h-[50vh] w-full"/>
    } ); 
    return (
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors mb-10">
                    Where is your charger located?
               </h2>
            </div>
            <form action={CreateLocation}>
                <input type="hidden" name="locationId" value={params.id} />
                <input type="hidden" name="countryValue" value={locationValue}/>
                <div className="w-3/5 mx-auto mb-36">
                    <div className="mb-5">
                        <Select required onValueChange={(value)=> setLocationValue(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a City"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Countries
                                    </SelectLabel>
                                    {getAllCountries().map((item) => (
                                        <SelectItem key={item.value} value={item.value}>
                                            {item.flag}{item.label} 
                                        </SelectItem>
                                    )
                                    )}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <LazyMap locationValue={locationValue} /> 
                </div>
                
            </form>
            <ListingFooter/> 
        </>
    )
}