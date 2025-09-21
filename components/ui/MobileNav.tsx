"use client"
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { SideBarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <section className='w-full max-w-[264px] mx-auto'>
      <Sheet>
        <SheetTrigger className='cursor-pointer'>
          <Image src="/icons/hamburger.svg" alt="menu" width={24} height={24} />
        </SheetTrigger>
        <SheetContent side='left' className='w-full max-w-[300px] bg-bg1'>
          <SheetHeader>
            <SheetTitle>
              <Link href={'/'} className='p-4 flex gap-2'>
                <Image src={'./icons/logo.svg'} alt='Logo' height={32} width={32} />
                <p className='font-semibold text-xl'>Yoom</p>
              </Link>
            </SheetTitle>

            <div className="flex h-[calc(100vh-60px)] pt-10 flex-col gap-6">
              {SideBarLinks.map((link, index) => {
                const startWith = pathname.startsWith(link.route);
                const is_active = pathname == link.route || (index !== 0 && startWith);
                return (
                <SheetClose asChild key={link.label}>
                <Link
                  href={link.route}
                  key={link.label}
                  className={cn('flex gap-4 items-center p-4 rounded-lg justify-start max-w-60', {
                    'bg-blue-1': is_active
                  })}
                >
                  <Image src={link.image} alt={link.label} height={20} width={20} />
                  <p className='font-semibold'>
                    {link.label}
                  </p>
                </Link>
                </SheetClose>
                )
              })}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav