"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'
import { Phone } from 'lucide-react'

export default function Cta() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between"
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true }}
        >
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Electrical Work Done?</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl">
              Contact us today for a free estimate on any electrical service. Our team is ready to assist you with all your electrical needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="accent" size="lg" className="shadow-lg" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" size="lg" asChild>
              <Link href="tel:5551234567" className="flex bg-gray-900 items-center">
                <Phone className="mr-2 h-5 w-5" />
                {SITE_CONFIG.phone}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}