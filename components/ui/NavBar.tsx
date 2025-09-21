import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'

function NavBar() {
  return (
    <nav className='fixed z-10 w-full bg-bg2 flex justify-between px-6 py-2 items-center lg:px-10'>
      <Link href={'/'} className='p-4 flex gap-2'>
        <Image src={'./icons/logo.svg'} alt='Logo' height={32} width={32} />
        <p className='font-semibold text-xl max-sm:hidden'>Yoom</p>
      </Link>

      <div className='flex items-center gap-5'>
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        
        {/* Mobile nav */}
        <div className='sm:hidden'>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}

export default NavBar