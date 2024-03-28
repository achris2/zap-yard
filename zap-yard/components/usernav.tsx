import { MenuIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import AnonUserImg from '../public/anonuser.webp';
import React from 'react';
import Image from "next/image";

export default function UserNav() {
  return (
      <DropdownMenu>
          <DropdownMenuTrigger>
              <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                  <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" /> 
                  <Image src={AnonUserImg}
                      alt="User Avatar"
                      className="rounded-full h-8 w-8 hidden lg:block"
                  />
              </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem>Register</DropdownMenuItem>
              <DropdownMenuItem>Login</DropdownMenuItem>
          </DropdownMenuContent>
    </DropdownMenu>
  )
}
