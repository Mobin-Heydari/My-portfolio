import { ContactForm } from '@/components/ContactForm'
import Footer from '@/components/Footer'
import AboutSection from '@/components/home/AboutSection'
import NewBlogsSection from '@/components/home/NewBlogsSection'
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
        <NewBlogsSection />
        <Clients />
        <ContactForm />
        <Footer />
      </div>
    </main>
  )
}
