"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'

export default function ServicesHero() {
  return (
    <section className="relative py-32 bg-primary">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Our Electrical Services</h1>
          <p className="text-primary-foreground/90 text-xl">
            From minor repairs to major installations, our team of licensed electricians has the expertise to handle all your electrical needs safely and efficiently.
          </p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}