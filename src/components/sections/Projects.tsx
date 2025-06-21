import React from 'react'
import Card from '../Card'
import assets from '@/assets/assets'
  



const Projects = () => {

  const projects = [
    {
      title: 'Oreva',
      description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
      image: assets.projectImg1,
      link: '/projects/ecommerce',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      type: 'project' as const
    },
    {
      title: 'Workit',
      description: 'A productivity app built with React and TypeScript, featuring task management, time tracking, and collaboration tools.',
      image: assets.projectImg1,
      link: '/projects/workit',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      type: 'project' as const
    },
    {
      title: 'Mike Portfolio',
      description: 'A personal portfolio website built with Next.js and TypeScript, showcasing my projects and skills.',
      image: assets.projectImg1,
      link: '/projects/mike-portfolio',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      type: 'project' as const
    },
    // ... more projects
  ]

  return (
    <div>
      <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h3 className="heading-secondary mb-4 animate-fade-in">
            Featured <span className="text-accent-emerald">Projects</span>
          </h3>
          <div className="w-20 h-1 bg-accent-emerald mx-auto rounded-full animate-slide-up"></div>
          <p className="text-muted md:text-xl max-w-2xl mx-auto mb-6 pt-5">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        {/* Project Cards Display */}
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              {...project}
              className="animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
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
    </div>
  )
}

export default Projects
