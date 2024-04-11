"use client";

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button";
import { Heart, Loader2 } from "lucide-react";

export function CreateSubmit() {
    const { pending } = useFormStatus();
    return(
    <>
        {pending ? (
                <Button disabled size="lg">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                Please wait 
            </Button>   
        ): (
            <Button type="submit" size="lg">Next</Button>   
            )}
        </>
    )
}

export function AddToFavouriteButton() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button
                    variant="outline"
                    size="icon"
                    disabled
                    className="bg-primary-foreground"
                >
                    <Loader2 className="h-4 w-4 animate-spin" />
                </Button>
            ) : (
                    <Button
                        variant="outline"
                        size="icon"
                        className="bg-primary-foreground"
                        type="submit"
                    >
                    <Heart className="h-4 w-4" />
                </Button >
            )
            }
            </>
    )
}

export function DeleteFromFavourites() {
    const { pending } = useFormStatus();
  return (
    <>
    {pending ? (
        <Button
            variant="outline"
            size="icon"
            disabled
            className="bg-primary-foreground"
        >
            <Loader2 className="h-4 w-4 animate-spin" />
        </Button>
    ) : (
            <Button
                variant="outline"
                size="icon"
                className="bg-primary-foreground"
                type="submit"
            >
            <Heart className="h-4 w-4" fill="#E21C49"/>
        </Button >
    )
    }
    </>
  )
}
