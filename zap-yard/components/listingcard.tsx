import Image from "next/image";
import Link from "next/link";



interface iAppProps{
    imagePath: string;
    description: string;
    location: string;
    price: number; 
};


export function ListingCard({ imagePath, description, location, price }: iAppProps) {
  return (
      <div className="flex flex-col">
          <div className="relative h-72">
              <Image
                  src={`https://imnaypnzvatjbonhywqy.supabase.co/storage/v1/object/public/images/${imagePath}`}
                  alt="Photo of Charger"
                  fill
                  className="rounded-lg h-full object-cover mb-3" />
          </div>
          <Link href={"/"}>
              <h3>{location}</h3>
          </Link>
      </div>
  )
}
