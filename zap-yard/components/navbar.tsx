import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import DesktopLogo from '../public/zapyard-desktoplogo.png';
import MobileLogo from '../public/zapyard-symbol.png';
import UserNav from './usernav';

export default function Navbar() {
  return (
      <nav className="w-full border-b">
          <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
              <Link href="/">
                  <Image
                      src={DesktopLogo}
                      alt="Zap Yard Logo"
                      className="max-w-40 hidden lg:block"
                  />
                  
                  <Image
                        src={MobileLogo}
                        alt="Mobile Zap Yard business logo"
                        className="block lg:hidden w-20"
                  /> 
              </Link>
              <div className="rounded-full border px-5 py-2">
                  <h1>Search Bar</h1>
              </div>
              <UserNav></UserNav>
          </div>
      </nav>
  )
}
