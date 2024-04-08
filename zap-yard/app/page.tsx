import FilterList from "@/components/filterlist";
import prisma from "./lib/db";
import { ListingCard } from "@/components/listingcard";
async function getData() {
  const data = await prisma.location.findMany({
    where: {
      addedCategory: true,
      addedLocation: true,
      addedDescription: true,
    },
    select: {
      photo: true, 
      id: true, 
      price: true, 
      description: true,
      country: true, 
    }
  }); 
  return data; 
}

export default async function Home() {
  const data = await getData(); 
  return (
      <div className="container mx-auto px-5 lg:px-10"> 
        <FilterList />
        <div>
          {data.map((item) => (
            <ListingCard
              key={item.id}
              description={item.description as string}
              imagePath={item.photo as string}
              location="{item.country as string}"
              price={item.price as number}
            />
          ))} 
        </div>
      </div>  
  );
}; 
