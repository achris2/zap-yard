import FilterList from "@/components/filterlist";
import prisma from "./lib/db";
import { ListingCard } from "@/components/listingcard";
async function getData({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const data = await prisma.location.findMany({
    where: {
      addedCategory: true,
      addedLocation: true,
      addedDescription: true,
      categoryName: searchParams?.filter ?? undefined, 
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

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const data = await getData({ searchParams: searchParams }); 
  return (
      <div className="container mx-auto px-5 lg:px-10"> 
        <FilterList />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {data.map((item) => (
            <ListingCard
              key={item.id}
              description={item.description as string}
              imagePath={item.photo as string}
              location={item.country as string}
              price={item.price as number}
            />
          ))} 
        </div>
      </div>  
  );
}; 
