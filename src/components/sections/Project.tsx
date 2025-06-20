import React from 'react'
import Card from '../Card'
import projectImg1 from '@/assets/projectImg1.png'


const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution featuring user authentication, payment processing, inventory management, and an intuitive admin dashboard. Built with modern technologies to ensure scalability and performance.',
      image: projectImg1,
      link: '/projects/ecommerce',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      date: '2024'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities. Designed for modern teams and remote work.',
      image: projectImg1,
      link: '/projects/taskapp',
      tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      date: '2024'
    },
    // Add more projects...
  ]

  return (
    <div className="section-padding bg-surface-card/30">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="heading-secondary mb-4 animate-fade-in">
            Featured <span className="text-accent-emerald">Projects</span>
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
          <div className="w-20 h-1 bg-accent-emerald mx-auto rounded-full animate-slide-up"></div>
        </div>

        {/* Projects Grid - Full width cards */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              {...project}
              className="animate-slide-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 md:mt-16 lg:mt-20">
          <button className="bg-accent-emerald hover:bg-accent-emerald-hover text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
