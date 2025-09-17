"use client"
import { SideBarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SideBar() {
    const pathname = usePathname()
  return (
    <section 
    className='sticky bg-bg2 left-0 top-0 flex h-screen flex-col justify-between w-fit p-6 pt-28 max-md:hidden lg:w-[264px]'>
        <div className="flex flex-1 flex-col gap-6">
            { SideBarLinks.map((link, index) => {
                const is_active = pathname == link.route || pathname.startsWith(link.route);
                return <Link 
                    href={link.route}
                    key={link.label}
                    className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
                        'bg-blue-1' : is_active
                    })}
                    > 
                    <Image src={link.image} alt={link.label} height={24} width={24} />
                    <p className='text-lg max-lg:hidden font-semibold'>
                        {link.label} 
                    </p>
                    </Link>
            }) }
        </div>
    </section>
  )
}

export default SideBar