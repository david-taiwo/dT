import React from 'react'
import Card from '../Card'
import projectImg1 from '@/assets/projectImg1.png'



const Projects = () => {

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
      image: projectImg1,
      link: '/projects/ecommerce',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      type: 'project' as const
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
      image: projectImg1,
      link: '/projects/ecommerce',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      type: 'project' as const
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
      image: projectImg1,
      link: '/projects/ecommerce',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      type: 'project' as const
    },
    // ... more projects
  ]

  return (
    <div>
      <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="heading-secondary mb-4 animate-fade-in">
            My <span className="text-accent-emerald">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent-emerald mx-auto rounded-full animate-slide-up"></div>
        </div>

        <div className="">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              {...project}
              className="animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects
