"use client"
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { useCountries } from "@/app/lib/getcountries";
import { ShowMap } from "./showmap";
import { Button } from "./ui/button";
import { CreateSubmit } from "./submitbutton";
import { CardHeader } from "./ui/card";
import { Counter } from "./counter";

export function SearchComponent() {
    const [step, setStep] = useState(1);
    const [locationValue, setLocationValue] = useState("");
    const { getAllCountries } = useCountries();
    function SubmissionCheck() {
        if (step === 1) {
            return (
                <Button onClick={() => setStep(step + 1)} type="button">
                    Next
                </Button>
            )
        } else if (step === 2) {
            return (
                <CreateSubmit>
                    
                </CreateSubmit>
            )
        }
    }
    return (
        <Dialog >
            <DialogTrigger asChild>
                <div className="rounded-full py-2 px-5 border flex items-center cursor-pointer">
                    <div className="flex h-full divide-x font-medium"> 
                        <p className="px-4">Where</p>
                        <p className="px-4">When</p>
                        {/* <p className="px-4">Number of Chargers</p> */}
                    </div>
                    <Search className="bg-primary text-white p-1 h-6 w-6 rounded-full text-sm"/>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form className="flex flex-col gap-4">
                    <input type="hidden" name="country" value={locationValue} />
                    {step === 1 ? (
                        <>
                            <DialogHeader>
                                <DialogTitle>
                                    Select a Country
                                </DialogTitle>
                                <DialogDescription>
                                    We have a ZapYard wherever you are headed. 
                                </DialogDescription>
                            </DialogHeader>
                            <Select required onValueChange={(value) => setLocationValue(value)} value={locationValue}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a Country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Countries</SelectLabel>
                                    {getAllCountries().map((item) => (
                                        <SelectItem key={item.value} value={item.value}>
                                            {item.flag}{item.label}
                                        </SelectItem>
                                    )
                                    )}
                                </SelectGroup>
                            </SelectContent>
                            </Select>
                            <ShowMap locationValue={locationValue} />
                        </>
                    ) : (
                            <>
                                                        <DialogHeader>
                                <DialogTitle>
                                    Filter by specific criteria
                                </DialogTitle>
                                <DialogDescription>
                                    We have a ZapYard wherever you are headed. 
                                    </DialogDescription>
                                    <CardHeader className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">
                    Number of Chargers
                  </h3>
                  <p className="text-muted-foreground text-sm pr-3">
                    How many charging points do you need?
                  </p>

                </div>
                <Counter name="numberOfChargers"/>

              </div>
            </CardHeader>
                            </DialogHeader>
                            </>
                    )
                    
                    }
                    <DialogFooter>
                        <SubmissionCheck />
                    </DialogFooter>
                </form>
            </DialogContent>
            
      </Dialog>
  )
}
