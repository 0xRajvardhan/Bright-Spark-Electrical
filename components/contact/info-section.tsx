import React from 'react'
import { SITE_CONFIG } from '@/lib/constants'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function InfoSection() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Our Location</h4>
            <p className="text-gray-600">{SITE_CONFIG.address}</p>
            <p className="text-gray-500 text-sm mt-1">Serving the greater Powertown area and surrounding communities</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
            <p className="text-gray-600">{SITE_CONFIG.phone}</p>
            <p className="text-gray-500 text-sm mt-1">Available 24/7 for emergency services</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
            <p className="text-gray-600">{SITE_CONFIG.email}</p>
            <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="h-6 w-6 text-blue-600 mr-3 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday:</span>
                <span className="text-gray-600">{SITE_CONFIG.hours.weekdays}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday:</span>
                <span className="text-gray-600">{SITE_CONFIG.hours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="text-gray-600">{SITE_CONFIG.hours.sunday}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}