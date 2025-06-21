"use client"

import React, { useState } from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      address: '',
      message: ''
    })
    
    setIsSubmitting(false)
    alert('Message sent successfully!')
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: 'https://linkedin.com/in/yourprofile',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/yourprofile',
      color: 'hover:bg-gray-800'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/yourprofile',
      color: 'hover:bg-blue-400'
    },
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      url: 'https://facebook.com/yourprofile',
      color: 'hover:bg-blue-700'
    }
  ]

  return (
    <div className="section-padding bg-surface-card/30">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-12">
          <h3 className="heading-secondary mb-4 animate-fade-in">
            Let&#39;s <span className="text-accent-emerald">Connect</span>
          </h3>
          <div className="w-20 h-1 bg-accent-emerald mx-auto rounded-full animate-slide-up"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid-responsive-2 items-start gap-12 lg:gap-16">
          
          {/* Text Section - Left Side */}
          <div className="text-center space-y-8 animate-slide-up">
            
            {/* Get In Touch Title */}
            <div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Get In <span className="text-accent-emerald">Touch</span>
              </h3>
              
              {/* Paragraph */}
              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-lg mx-auto text-justify">
                Great software starts with clear intent and good communication.
                Have an idea in mind, or a bug that resists resolution? Let&#39;s connect.
                Whether it&#39;s building scalable systems, refining product flows, or architecting clean APIs I&#39;m here for it.
                Every project begins with a message, a brief line of code in the greater function.
                Reach out for collaboration, consultation, or simply to exchange ideas across the wire.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 md:gap-6 p-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group relative w-14 h-14 md:w-16 md:h-16 
                    bg-surface-border border border-surface-border 
                    rounded-full flex items-center justify-center 
                    text-muted hover:text-white transition-all duration-300 
                    hover:scale-110 hover:shadow-lg ${social.color}
                    animate-slide-up
                  `}
                  style={{ animationDelay: `${0.1 * index}s` }}
                  aria-label={social.name}
                >
                  <span className="text-xl md:text-2xl transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </span>
                  
                  {/* Tooltip */}
                  <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Form Section - Right Side */}
          <div className="animate-slide-up delay-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-2">
                  Name 
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-surface-border border border-surface-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent-emerald focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-foreground font-medium mb-2">
                  Email 
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-surface-border border border-surface-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent-emerald focus:border-transparent transition-all duration-200"
                  placeholder="name@email.com"
                />
              </div>

              {/* Address Input */}
              <div>
                <label htmlFor="address" className="block text-foreground font-medium mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-border border border-surface-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent-emerald focus:border-transparent transition-all duration-200"
                  placeholder="Address (optional)"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  Message 
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-surface-border border border-surface-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent-emerald focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Submit Button */}
              <div className='w-full flex justify-center md:justify-end'>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  py-4 px-6 rounded-lg font-medium text-white 
                  transition-all duration-200 shadow-lg hover:shadow-xl 
                  transform hover:scale-105 focus:outline-none focus:ring-2 
                  focus:ring-accent-emerald focus:ring-offset-2
                  ${isSubmitting 
                    ? 'bg-muted cursor-not-allowed' 
                    : 'bg-accent-emerald hover:bg-accent-emerald-hover'
                  }
                `}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
