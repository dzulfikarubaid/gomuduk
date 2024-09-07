import React from 'react'
import { motion } from 'framer-motion'
import {BiMenu, BiX} from 'react-icons/bi'
const Home = () => {
  const [open, setOpen] = React.useState(true)
  return (
    <div >
    {
      open &&
      <div className='bg-black/20 backdrop-blur-xl  w-full h-full flex justify-center items-center fixed top-0 left-1/2 -translate-x-1/2'>
      <Link href='/' className='absolute font-bold left-1/2 -translate-x-1/2 top-0 text-xl mt-12 text-white'>goMuduk</Link>
      <div className='w-[800px] h-[600px] bg-white rounded-3xl p-8 flex flex-col gap-4'>
      
      <button onClick={() => setOpen(false)} className='flex w-full flex-row-reverse'>
      <BiX size={30}></BiX>
      </button>
      <h1 className='font-bold text-xl'>Apa itu nasi muduk?</h1>
      <p className='text-sm text-justify'>Nasi Muduk adalah hidangan khas dari Desa Sendangagung, Kecamatan Paciran, Lamongan. Nasi ini berwarna kuning karena menggunakan kunyit sebagai pewarna alami, dan memiliki rasa gurih, legit, serta sedikit pedas. Ciri khas dari nasi Muduk adalah perpaduan rempah-rempah yang kaya, seperti kunyit, jahe, lengkuas, kencur, cengkeh, sereh, pala, dan kayu manis, yang memberikan aroma khas dan kelezatan pada nasi. Nasi Muduk biasanya disajikan dengan lauk pauk seperti telur, ikan pindang, ikan cumi, ikan asin, jeroan ayam, kering tempe, dan sambal yang dirajang (tidak diulek).

Nasi ini menjadi bagian dari tradisi warga Desa Sendangagung, disajikan dalam acara hajatan seperti pernikahan, dan juga menjadi sumber penghasilan bagi masyarakat desa melalui penjualan di pasar atau rumah-rumah. Nasi Muduk dikenal sebagai warisan turun-temurun dari nenek moyang dan bahkan ada festival yang diadakan untuk mempromosikan makanan ini. </p>
      <h1 className='font-bold text-xl'>Perbedaan nasi muduk dan nasi kuning?</h1>
      <p className='text-sm text-justify'>Nasi muduk sekilas mirip dengan nasi kuning atau nasi uduk. Bahan campurannya pun menggunakan santan kelapa. Namun, dari segi rasa, nasi muduk terkesan lebih kompleks dan kaya rempah. Nasi Muduk dibuat dengan campuran rempah yang lebih kompleks, termasuk kunyit, lengkuas, jahe, kencur, jinten, kayu manis, cengkeh, sereh, dan pala. Santan juga digunakan untuk memberikan rasa gurih. Kombinasi rempah ini memberi rasa yang lebih kaya dan aroma yang kuat. Sedangkan nasi kuning menggunakan kunyit sebagai pewarna utama dan umumnya lebih sederhana dalam rempah-rempah, biasanya hanya menggunakan santan, bawang merah, bawang putih, daun salam, dan serai.</p>
      </div>
      
      </div>
    }
      <div className='w-full flex gap-16 justify-center items-center px-10 text-gray-700'>
        <div className='bg-yellow-400 w-[800px] h-[400px] p-10 rounded-3xl'>

        </div>
        <h1 className='text-[80px] font-extrabold'>
          Nasi ini memang warna <span className='text-yellow-400'>kuning</span>, tapi ini bukan nasi <span className='text-yellow-400'>kuning</span>! ini nasi <span className=''>muduk</span>.
        </h1>
      </div>

      <div className='flex justify-center items-center underline text-white font-bold text-xl mt-16'>
        <button className='p-2 px-4  bg-yellow-400 rounded-2xl text-center' onClick={() => setOpen(true)}>Apa itu nasi muduk?</button>
      </div>

      <div className='w-full bg-gray-400 mt-10 p-10'>
        <h1 className='text-2xl font-bold text-center'>Menu</h1>
        <div className='flex flex-row gap-16 mt-10 justify-center items-center'>
          <div className='bg-white p-10 rounded-2xl flex flex-col items-center'>
            {/* <img src='img2.png' className='w-[300px] pb-4 border-b-4 border-black'></img> */}
            <div className='w-[300px] h-[200px] bg-yellow-400 rounded-3xl'></div>
            <h1 className='text-2xl font-bold text-center text-gray-700 my-5'>Sego Muduk Telur</h1>
            <div className='flex flex-col justify-start items-start w-full '>
              <li>Nasi Muduk</li>
              <li>Telur</li>
              <li>Tempe</li>
              <li>Sambal Istimewa</li>
              <li>Timun</li>



            </div>
            <div className='flex flex-row-reverse w-full  font-extrabold text-xl '>IDR10K</div>
          </div>
          <div className='bg-white p-10 rounded-2xl flex flex-col items-center'>
            {/* <img src='img2.png' className='w-[300px] pb-4 border-b-4 border-black'></img> */}
            <div className='w-[300px] h-[200px] bg-yellow-400 rounded-3xl'></div>
            <h1 className='text-2xl font-bold text-center text-gray-700 my-5'>Sego Muduk Ayam</h1>
            <div className='flex flex-col justify-start items-start w-full '>
              <li>Nasi Muduk</li>
              <li>Ayam</li>
              <li>Tempe</li>
              <li>Sambal Istimewa</li>
              <li>Timun</li>



            </div>
            <div className='flex flex-row-reverse w-full  font-extrabold text-xl '>IDR12K</div>
          </div>
          <div className='bg-white p-10 rounded-2xl flex flex-col items-center'>
            {/* <img src='img2.png' className='w-[300px] pb-4 border-b-4 border-black'></img> */}
            <div className='w-[300px] h-[200px] bg-yellow-400 rounded-3xl'></div>
            <h1 className='text-2xl font-bold text-center text-gray-700 my-5'>Sego Muduk Jeroan</h1>
            <div className='flex flex-col justify-start items-start w-full '>
              <li>Nasi Muduk</li>
              <li>Jeroan</li>
              <li>Tempe</li>
              <li>Sambal Istimewa</li>
              <li>Timun</li>



            </div>
            <div className='flex flex-row-reverse w-full  font-extrabold text-xl '>IDR12K</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home