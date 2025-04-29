"use client"

import React from 'react'
import Image from 'next/image'
import { TESTIMONIALS } from '@/lib/constants'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. See what our satisfied customers have to say about our electrical services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-blue-100" />
              <div className="flex items-center mb-6">
                <div className="mr-4 relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}