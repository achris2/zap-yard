import { SelectCategory } from "@/components/selectcategory";

export default function StructureRoute() {
    return (
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors">
                    Describe your Zap Yard
                </h2>
            </div>
            <form>
                <SelectCategory/>
            </form>
        </>
    )
}