import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { StaticImageData } from 'next/image'

interface CardProps {
  title: string
  description: string
  image?: string | StaticImageData
  imageAlt?: string
  link?: string
  linkText?: string
  tags?: string[]
  date?: string
  author?: string
  type?: 'project' | 'blog' | 'service'
  className?: string
  variant?: 'default' | 'featured'
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageAlt = title,
  link,
  linkText = 'View Project',
  tags = [],
  date,
  author,
  type = 'project',
  className = '',
  variant = 'default'
}) => {
  const baseClasses = 'card-hover group w-full'
  const variantClasses = {
    default: 'p-0', // Remove padding since we'll handle it per section
    featured: 'p-0 border-2 border-accent-emerald'
  }

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Card Layout - Responsive */}
      <div className="flex flex-col md:flex-row h-full">
        
        {/* Image Section */}
        {image && (
          <div className="relative w-full md:w-2/5 h-64 md:h-80 lg:h-96 overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary-bg/20 group-hover:bg-primary-bg/10 transition-colors duration-300"></div>
            
            {/* Optional: Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/40 via-transparent to-transparent"></div>
          </div>
        )}

        {/* Content Section */}
        <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <div className="space-y-4 md:space-y-6">
            
            {/* Meta Info */}
            {(date || author) && (
              <div className="flex items-center gap-2 text-sm text-muted">
                {date && <span>{date}</span>}
                {date && author && <span>•</span>}
                {author && <span>by {author}</span>}
              </div>
            )}

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground group-hover:text-accent-emerald transition-colors duration-300 leading-tight">
              {title}
            </h3>

            {/* Description */}
            <p className="text-muted leading-relaxed text-base md:text-lg lg:text-xl">
              {description}
            </p>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 md:gap-3">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm bg-accent-emerald/10 text-accent-emerald rounded-full border border-accent-emerald/20 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            {link && (
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                <Link
                  href={link}
                  className="inline-flex items-center justify-center gap-2 bg-accent-emerald hover:bg-accent-emerald-hover text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {linkText}
                  <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
                
                {/* Optional: GitHub/Demo links */}
                <button className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-accent-emerald text-accent-emerald hover:bg-accent-emerald hover:text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium transition-all duration-200">
                  View Code
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
