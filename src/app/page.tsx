import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Blog from '@/components/sections/Blog'
import Footer from '@/components/Footer'
import Skills from '@/components/sections/Skills'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Fixed Navigation - Responsive */}
      <Navbar />
      
      {/* Hero Section - Full responsive viewport */}
      <section 
        id="home" 
        className="min-h-screen from-background to-surface-shadow 
                   flex items-center justify-center
                   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      >
        <Hero />
      </section>
      
      {/* About Section - Responsive container */}
      <section 
        id="about" 
        className="bg-surface-card border-t border-surface-border
                   section-padding"
      >
        <div className="container-custom">
          <About />
        </div>
      </section>
      
      {/* Skills Section - Responsive grid ready */}
      <section 
        id="skills" 
        className="bg-background section-padding"
      >
        <div className="container-custom">
          <Skills />
        </div>
      </section>
      
      {/* Projects Section - Responsive cards ready */}
      <section 
        id="projects" 
        className="bg-surface-card section-padding"
      >
        <div className="container-custom">
          <Projects />
        </div>
      </section>
      
      {/* Blog Section - Responsive grid ready */}
      <section 
        id="blog" 
        className="bg-background section-padding"
      >
        <div className="container-custom">
          <Blog />
        </div>
      </section>
      
      {/* Contact Section - Responsive form ready */}
      <section 
        id="contact" 
        className="bg-gradient-to-t from-surface-shadow to-surface-card 
                   section-padding"
      >
        <div className="container-custom">
          <Contact />
        </div>
      </section>
      
      {/* Footer - Full width responsive */}
      <Footer />
    </main>
  )
}
