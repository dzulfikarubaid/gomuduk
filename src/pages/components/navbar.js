import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-center w-full items-center p-6 '>
    <Link href='/' className='absolute font-bold left-0 text-2xl ml-10'>goMuduk</Link>
     <div className='flex flex-row gap-10  bg-yellow-400 rounded-3xl p-10 py-2 font-bold text-white'>
     <Link href='/' className='text-xl'>Home</Link>
     <Link href='/about' className='text-xl'>About</Link>
     <Link href='/contact' className='text-xl'>Contact</Link>
     </div>
    </div>
  )
}

export default Navbar