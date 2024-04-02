import { createCategoryPage } from "@/app/actions";
import { ListingFooter } from "@/components/listingFooter";
import { SelectCategory } from "@/components/selectcategory";

export default function StructureRoute({params}: {params: {id:string}}) {
    return (
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors">
                    Describe your Zap Yard
                </h2>
            </div>
            <form action={createCategoryPage}>
                <input type="hidden" name="locationId" value={params.id} />
                <SelectCategory />
                <ListingFooter /> 
            </form>
        </>
    )
}