"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/animations'

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Electrical Services</h2>
          <p className="text-gray-600 text-lg">
            From simple repairs to complex installations, our licensed electricians provide comprehensive electrical services for residential and commercial clients.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-48">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 p-0 flex items-center"
                  asChild
                >
                  <Link href={`/services#${service.id}`}>
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}