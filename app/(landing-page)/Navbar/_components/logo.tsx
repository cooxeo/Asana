import Link from 'next/link'
import Image from 'next/image';
import React from 'react'


const Logo = () => {
  return (
    <Link
    href={'/'}

    >
        <Image
        src = '/images/logo.svg'
        alt = 'logo'
        width={150}
        height={150}
        className='mr-6'
        />

    </Link>
  );
}

export default Logo