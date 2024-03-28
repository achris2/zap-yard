import FilterList from "@/components/filterlist";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-5 lg:px-10"> 
        <FilterList />
      </div>  
    </>
  );
}
