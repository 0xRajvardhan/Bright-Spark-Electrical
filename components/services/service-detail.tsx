"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, fadeInRight } from '@/lib/animations'

export default function ServiceDetail({ id }: { id: string }) {
  const service = SERVICES.find(s => s.id === id)
  
  if (!service) return null

  return (
    <section id={id} className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={fadeInLeft.initial}
            whileInView={fadeInLeft.animate}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={fadeInRight.initial}
            whileInView={fadeInRight.animate}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
            <p className="text-gray-600 text-lg mb-6">{service.description}</p>
            
            <ul className="space-y-3 mb-8">
              {service.services.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={fadeIn.initial}
                  whileInView={fadeIn.animate}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex space-x-4">
              <Button variant="primary" asChild>
                <Link href="/contact">Request this Service</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}