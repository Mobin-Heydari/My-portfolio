import Hero from '@/components/home/Hero'
import Navbar from '@/components/Navbar'

import Image from 'next/image'



export default function Home() {
  return (
    <main className='relative flex justify-center items-center flex-col overflow-hidden mx-auto bg-Base'>
      <div className='w-full'>
        <Navbar />
        <Hero />
      </div>
    </main>
  )
}
