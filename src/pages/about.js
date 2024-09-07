import React from 'react'

const About = () => {
  return (
    <div className='p-10 w-full flex flex-col items-center gap-10'>
    <h1 className='font-bold text-2xl border-b-4 pb-2 w-fit border-yellow-400'>Cerita Perjalanan Kami</h1>
    <p className='text-justify'>goMuduk didirikan sebagai upaya untuk mengenalkan makanan khas Desa Sendangagung yaitu nasi muduk ke Indonesia bahkan dunia. Go pada nama goMuduk memiliki dua makna, yaito sego dan go, sego artinya artinya adalah nasi dan go artinya adalah pergi. </p>
    <div className='flex flex-row gap-16 justify-start w-full items-center '>
    <div className='bg-gray-400 w-[600px] h-[400px] rounded-3xl'></div>
    <div className='flex flex-col gap-10'>
    <div>
    <h1 className='font-bold text-2xl'>Ahmad Dzulfikar Ubaidillah</h1>
    {/* <h1>Chief Executive Officer & Chief Technology Officer</h1> */}
    </div>
    <div>
    <h1 className='font-bold text-2xl'>Ahmad Arif Bil Haq</h1>
    {/* <h1>Chief Marketing Officer & Chief Operations Officer</h1> */}
    </div>
    <div>
    <h1 className='font-bold text-2xl'>Nizaar Roby Irawan</h1>
    {/* <h1>Chief Content Officer</h1> */}
    </div>
    <div>
    <h1 className='font-bold text-2xl'>Ferdika Pradana Putra Hidayat</h1>
    {/* <h1>Chief Financial Officer</h1> */}
    </div>
    </div>
    </div>
    </div>
  )
}

export default About