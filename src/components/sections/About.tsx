import React from 'react'

const About = () => {
  // Stats data
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ]

  // Skills/Technologies
  const technologies = [
    { name: 'React', level: 70 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'MongoDB', level: 75 }
  ]

  // Services offered
  const services = [
    {
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with modern frameworks',
      icon: '🎨'
    },
    {
      title: 'Backend Development', 
      description: 'Building robust APIs and server-side applications',
      icon: '⚙️'
    },
    {
      title: 'Full Stack Solutions',
      description: 'End-to-end web application development and deployment',
      icon: '🚀'
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="heading-secondary mb-4 animate-fade-in">
            About <span className="text-accent-emerald">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent-emerald mx-auto rounded-full animate-slide-up"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid-responsive-2 items-center mb-16 lg:mb-20">
          
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="heading-tertiary text-accent-blue">
              Passionate Developer & Problem Solver
            </h3>
            
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I'm a dedicated freelance developer with a passion for creating 
                exceptional digital experiences. With over 3 years of experience 
                in web development, I specialize in building modern, scalable 
                applications that solve real-world problems.
              </p>
              
              <p>
                My journey started with curiosity about how websites work, and 
                it has evolved into a career focused on crafting clean, efficient 
                code and intuitive user interfaces. I believe in the power of 
                technology to transform businesses and improve lives.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community through my blog.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-accent-emerald hover:bg-accent-emerald-hover text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Let's Work Together
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 animate-slide-up delay-200">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="card text-center p-6 hover:border-accent-emerald transition-colors duration-300"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-emerald mb-2">
                  {stat.number}
                </div>
                <div className="text-muted text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16 lg:mb-20">
          <h3 className="heading-tertiary text-center mb-8 md:mb-12 animate-fade-in">
            Technologies I Work With
          </h3>
          
          <div className="grid-responsive-2 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className="animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{tech.name}</span>
                  <span className="text-accent-emerald font-medium">{tech.level}%</span>
                </div>
                <div className="w-full bg-surface-border rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-accent-emerald to-accent-blue h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="heading-tertiary text-center mb-8 md:mb-12 animate-fade-in">
            What I Can Do For You
          </h3>
          
          <div className="grid-responsive-3">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="card-hover text-center p-6 animate-slide-up"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h4>
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
