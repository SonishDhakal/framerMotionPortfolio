import React from 'react'
import Socials from '../components/Socials'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
   <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
<div className="container mx-auto">
  <div className='py-4 xl:py-0 flex gap-y-4 flex-col xl:flex-row justify-between w-full items-center h-full'>
    {/* logog */}
    <Link href={'/'}>
      <Image src={'/logo.svg'}
      width={220}
      height={48}
    alt=''
    priority={true}
    />
    </Link>
<Socials />
    
    
  </div>
</div>

   </header>
  )
}

export default Header 