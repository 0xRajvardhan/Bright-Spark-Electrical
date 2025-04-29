import ServicesHero from '@/components/services/hero'
import ServiceDetail from '@/components/services/service-detail'
import Cta from '@/components/home/cta'
import { SERVICES } from '@/lib/constants'

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      
      <div className="py-8">
        {SERVICES.map((service) => (
          <ServiceDetail key={service.id} id={service.id} />
        ))}
      </div>
      
      <Cta />
    </main>
  )
}