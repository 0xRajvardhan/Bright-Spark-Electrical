import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Zap } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-bold">{SITE_CONFIG.name}</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Professional electrical services for residential and commercial properties. Licensed, bonded, and insured for your protection.
            </p>
            <div className="flex space-x-4">
              <Link href={SITE_CONFIG.socials.facebook} className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </Link>
              <Link href={SITE_CONFIG.socials.twitter} className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </Link>
              <Link href={SITE_CONFIG.socials.instagram} className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Contact
              </Link>
              <Link href="/services#emergency" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Emergency Services
              </Link>
              <Link href="/services#residential" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Residential
              </Link>
              <Link href="/services#commercial" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Commercial
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-500 mt-0.5" />
                <span className="text-gray-400">{SITE_CONFIG.phone}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-500 mt-0.5" />
                <span className="text-gray-400">{SITE_CONFIG.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 mt-0.5" />
                <span className="text-gray-400">{SITE_CONFIG.address}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="text-white font-medium">Weekdays</h4>
                  <p className="text-gray-400">{SITE_CONFIG.hours.weekdays}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="text-white font-medium">Saturday</h4>
                  <p className="text-gray-400">{SITE_CONFIG.hours.saturday}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="text-white font-medium">Sunday</h4>
                  <p className="text-gray-400">{SITE_CONFIG.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Fully Licensed & Insured | Available 24/7 for Emergencies
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}