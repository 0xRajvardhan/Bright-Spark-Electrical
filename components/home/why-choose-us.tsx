"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, Award, Clock, ShieldCheck, ThumbsUp, Zap } from 'lucide-react'
import { fadeIn, staggerContainer } from '@/lib/animations'

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
    title: "Licensed & Insured",
    description: "Fully licensed and insured professionals for your peace of mind and protection."
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: "24/7 Emergency Service",
    description: "Electrical emergencies don't wait, and neither do we. Available day or night."
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-blue-600" />,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a 100% satisfaction guarantee on all services."
  },
  {
    icon: <Award className="h-10 w-10 text-blue-600" />,
    title: "Experienced Technicians",
    description: "Our electricians have years of experience handling all types of electrical work."
  },
  {
    icon: <AlertCircle className="h-10 w-10 text-blue-600" />,
    title: "Safety First",
    description: "We prioritize safety in every job, following strict industry standards and protocols."
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-600" />,
    title: "Fast & Reliable",
    description: "Prompt service and reliable solutions that get your electrical systems working properly."
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Bright Spark Electrical</h2>
          <p className="text-gray-600 text-lg">
            We deliver excellence in every electrical project, ensuring quality, safety, and customer satisfaction.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-lg bg-gray-50 border border-gray-100"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}