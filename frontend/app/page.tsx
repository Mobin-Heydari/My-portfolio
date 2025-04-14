import AboutSection from '@/components/home/AboutSection'
import Clients from '@/components/home/ClientsSection'
import Hero from '@/components/home/Hero'
import { RecentProjects } from '@/components/home/RecentProjects'
import Navbar from '@/components/Navbar'

import Image from 'next/image'



export default function Home() {
  return (
    <main className='relative bg-Base flex justify-center items-center flex-col overflow-hidden mx-auto'>
      <div className='w-full'>
        <Navbar />
        <Hero />
        <AboutSection />
        <RecentProjects />
        <Clients />
      </div>
    </main>
  )
}
