import Hero from '@/components/sections/home/Hero'
import Clients from '@/components/sections/home/Clients'
import HomeServices from '@/components/sections/home/HomeServices'
import HomePortfolio from '@/components/sections/home/HomePortfolio'
import TechStack from '@/components/sections/home/TechStack'
import Testimonials from '@/components/sections/home/Testimonials'
import CTA from '@/components/sections/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <HomeServices />
      <HomePortfolio />
      <TechStack />
      <Testimonials />
      <CTA />
    </>
  )
}
