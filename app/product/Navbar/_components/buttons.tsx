import React from 'react'
import { Button } from '@/components/ui/button'


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

  import { AlignJustify, Globe } from 'lucide-react'
  import Link from 'next/link'






const ActionButtons = () => {
  return (
    <div>
    <div className='md:hidden'>
    <Sheet>
    <SheetTrigger><AlignJustify/></SheetTrigger>
    <SheetContent>
        <SheetHeader>
        <SheetDescription>
            <div className='flex flex-col space-y-4 items-start w-full text-lg text-black '>
                <Link href={'/'}>
                    Sign In
                </Link>
                <Link href={'/'}>
                    Get Started
                </Link>
                <Link href={'/pricing'}>
                    Pricing
                </Link>
                <Link href={'/'}>
                    Features
                </Link>
                <Link href={'/contact'}>
                    Contact
                </Link>
                <Link href={'/'}>
                    About
                </Link>


            </div>
        </SheetDescription>
        </SheetHeader>
    </SheetContent>
    </Sheet>

    </div>
    <div className='hidden md:flex md:space-x-4 items-center'>
        <div className='border-r border-black'>
            <div className='mr-4'>
                <Globe className='h-6 w-6 text-gray-700'/>
            </div>

        </div>

        <Link href={'/contact'} passHref>
            Contact Sales
        </Link>

        <Button className='text-md' variant={'ghost'}>
            Sign In
        </Button>
        <Button className='bg-black text-md rounded-sm'>
            Get Started
        </Button>

    </div>
    </div>
  )
}

export default ActionButtons