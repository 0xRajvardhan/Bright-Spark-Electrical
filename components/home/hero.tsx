"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { fadeIn, fadeInLeft, fadeInRight } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={fadeInLeft.initial}
            animate={fadeInLeft.animate}
            transition={{ duration: 0.6 }}
          >
            Professional Electrical Services You Can Trust
          </motion.h1>
          
          <motion.p 
            className="text-primary-foreground/90 text-xl mb-8"
            initial={fadeInLeft.initial}
            animate={fadeInLeft.animate}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Licensed electricians providing residential and commercial electrical solutions with a commitment to safety, quality, and customer satisfaction.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p className="text-primary-foreground/80 text-sm mb-2">Scroll to learn more</p>
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary-foreground/80 rounded-full"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}