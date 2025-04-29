import Hero from '@/components/home/hero'
import ServicesPreview from '@/components/home/services-preview'
import WhyChooseUs from '@/components/home/why-choose-us'
import Testimonials from '@/components/home/testimonials'
import Cta from '@/components/home/cta'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <Cta />
    </main>
  )
}