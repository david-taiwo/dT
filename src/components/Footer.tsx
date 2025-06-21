"use client"

import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: 'https://linkedin.com/in/yourprofile',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/yourprofile',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/yourprofile',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      url: 'https://facebook.com/yourprofile',
      color: 'hover:text-blue-500'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Solutions',
    'UI/UX Design',
    'Web Consulting',
    'API Development'
  ]

  return (
    <footer className="bg-primary-bg border-t border-surface-border px-11 flex ">
      <div className="container-custom">
        
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  david <span className="text-accent-emerald">Taiwo</span>
                </h3>
                <p className="text-muted leading-relaxed">
                  Passionate developer creating exceptional digital experiences. 
                  Let&#39;s build something amazing together.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted hover:text-accent-emerald transition-colors duration-200">
                  <FaPhone className="text-accent-emerald flex-shrink-0" />
                  <a href="tel:09013679054" className="hover:underline">
                    09013679054
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted hover:text-accent-emerald transition-colors duration-200">
                  <FaEnvelope className="text-accent-emerald flex-shrink-0" />
                  <a href="mailto:davidTaiwo003@gmail.com" className="hover:underline">
                    davidTaiwo003@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3 text-muted">
                  <FaMapMarkerAlt className="text-accent-emerald flex-shrink-0 mt-1" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-muted hover:text-accent-emerald transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-foreground">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-muted">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-foreground">Stay Connected</h4>
              
              {/* Newsletter Signup */}
              <div>
                <p className="text-muted mb-4">
                  Subscribe to get updates on new projects and blog posts.
                </p>
                <form className="space-y-3">
                  
                  <button
                    type="submit"
                    className="w-full bg-accent-emerald hover:bg-accent-emerald-hover text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-muted mb-4">Follow me on social media</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        w-10 h-10 bg-surface-border border border-surface-border 
                        rounded-lg flex items-center justify-center text-muted 
                        transition-all duration-200 hover:scale-110 hover:shadow-lg
                        ${social.color}
                      `}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface-border py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-muted text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-1">
                © {currentYear} david Taiwo
                
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              
              <Link 
                href="/terms" 
                className="text-muted hover:text-accent-emerald transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent-emerald hover:bg-accent-emerald-hover text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  )
}

export default Footer
