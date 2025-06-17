import React from 'react'
import Image from 'next/image'
import profileImg from '@/assets/profileImg.png'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-custom">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          
          

          {/* Content Section - Bottom on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8">
            
            {/* Text Section */}
            <div className="space-y-4 md:space-y-6">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight animate-fade-in">
                Hi, I'm David a{' '}
                <span className="text-accent-emerald">
                  Freelance Developer.
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted font-normal leading-relaxed animate-slide-up max-w-2xl mx-auto lg:mx-0">
                Building sleek, user-focused web experiences.
              </p>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 md:pt-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              
              {/* View Projects Button - Always visible */}
              <button className="bg-accent-emerald hover:bg-accent-emerald-hover text-white border-2 border-accent-emerald hover:border-accent-emerald-hover px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-all duration-200 touch-manipulation font-sans w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105">
                View Projects
              </button>

              {/* Contact Me Button - Hidden on mobile */}
              <button className="hidden sm:block bg-primary-bg hover:bg-foreground text-foreground hover:text-primary-bg border-2 border-accent-emerald hover:border-accent-emerald px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-all duration-200 touch-manipulation font-sans shadow-lg hover:shadow-xl transform hover:scale-105">
                Contact Me
              </button>
            </div>

            {/* Additional Info - Optional */}
            <div className="pt-6 md:pt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse"></div>
                  <span className="text-sm sm:text-base">Available for freelance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - Top on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem]">
              <div className="w-full h-full rounded-[3rem] sm:rounded-[4rem] md:rounded-[5rem] lg:rounded-[6rem] overflow-hidden shadow-2xl border-4 border-accent-emerald">
              {/* Profile Image */}                 
               <Image
                  src={profileImg}
                  alt="David Taiwo - Freelance Developer"
                  fill
                  className="object-cover object-center rounded-[100px_100px_50px_50px]"
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, (max-width: 1280px) 512px, 576px"
                />
                
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent-emerald rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-accent-blue rounded-full animate-bounce-slow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
