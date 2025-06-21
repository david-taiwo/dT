'use client'

import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
  ]

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Handle link click (close mobile menu)
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-surface-border shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 md:px-8">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-accent-emerald rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">dt</span>
              </div>
              <span className="text-foreground font-bold text-lg md:text-xl lg:text-2xl  md:block">
                davidTaiwo
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground hover:text-accent-emerald px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-emerald transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>

              {/* Download CV Button */}
              <button className="bg-accent-emerald hover:bg-accent-emerald-hover text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-colors duration-200 touch-manipulation">
                Download CV
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-foreground hover:text-accent-emerald p-2 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/95 backdrop-blur-md"
            onClick={handleLinkClick}
          ></div>
          
          {/* Mobile Menu Content */}
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="text-center space-y-8 animate-fade-in">
              {/* Mobile Navigation Links */}
              <div className="space-y-6">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block text-foreground hover:text-accent-emerald text-2xl md:text-3xl font-medium transition-colors duration-200 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Mobile Download CV Button */}
              <div className="pt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <button 
                  onClick={handleLinkClick}
                  className="bg-accent-emerald hover:bg-accent-emerald-hover text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors duration-200 touch-manipulation"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
