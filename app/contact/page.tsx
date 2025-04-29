import ContactForm from '@/components/contact/contact-form'
import InfoSection from '@/components/contact/info-section'
import Map from '@/components/contact/map'

export default function ContactPage() {
  return (
    <main className="bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600 text-lg">
              Have questions or need to schedule service? We're here to help. Contact our team using the form below or call us directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <InfoSection />
            </div>
          </div>
          
          <Map />
        </div>
      </div>
    </main>
  )
}