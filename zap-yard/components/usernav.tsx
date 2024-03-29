/* eslint-disable @next/next/no-img-element */
import { MenuIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import React from 'react';
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function UserNav() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
  return (
      <DropdownMenu>
          <DropdownMenuTrigger>
              <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                  <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" /> 
                  <img
                      src={user?.picture ?? "anonuser.webp"}
                      alt="User Avatar"
                      className="rounded-full h-8 w-8 hidden lg:block"
                  />
              </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
              {user ? (
                  <>
                      <DropdownMenuItem>
                          <form className="w-full">
                              <button type="submit" className="w-full text-start">
                                  List Your Charger
                              </button>
                          </form>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                          <Link href="/my-listings">
                              My Listings
                          </Link>      
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                          <Link href="/my-listings">
                              My Listings
                          </Link>      
                    </DropdownMenuItem>  
                    <DropdownMenuItem>
                          <Link href="/my-listings">
                              My Listings
                          </Link>      
                    </DropdownMenuItem>
                    
                    <DropdownMenuSeparator/>
                    
                      <DropdownMenuItem>
                        <LogoutLink className="w-full">Log out</LogoutLink>
                    </DropdownMenuItem>
                  </>
              ) : (
                <>
                    <DropdownMenuItem>
                        <LoginLink className="w-full">Sign in</LoginLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <RegisterLink className="w-full">Sign up</RegisterLink>
                    </DropdownMenuItem>
                </>  
              )}
          </DropdownMenuContent>
    </DropdownMenu>
  )
}
