import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'

function NavBar() {
  return (
    <nav className='sticky bg-bg2 flex justify-between px-6 py-2 items-center lg:px-10'>
      <Link href={'/'} className='p-4 flex gap-2'>
        <Image src={'./icons/logo.svg'} alt='Logo' height={32} width={32} />
        <p className='font-semibold text-xl max-sm:hidden'>Yoom</p>
      </Link>

      <div className='flex-between gap-5'>
        <div>Clerk</div>


        {/* Mobile nav */}
        <div>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}

export default NavBar