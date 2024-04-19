import dynamic from "next/dynamic"
import { Skeleton } from "./ui/skeleton"

export function ShowMap({ locationValue }: { locationValue : string }) {
    const LazyMap = dynamic(
        () => import('@/components/map'),
        {
            ssr: false,
            loading: () => <Skeleton className="h-[50vh] w-full" />,
        }
    ); 

    return <LazyMap locationValue={locationValue} />; 

}
