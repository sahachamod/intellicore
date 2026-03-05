'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'
import Section from '@/components/ui/Section'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { projects } from '@/lib/data'

const categories = ['All', 'Web', 'Mobile', 'AI']

interface ProjectModalProps {
  project: typeof projects[0]
  onClose: () => void
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background-secondary border border-white/10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-foreground-muted hover:text-white hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="aspect-video relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-transparent" />
        </div>
        
        <div className="p-8">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
            {project.category}
          </span>
          
          <h2 className="text-2xl md:text-3xl font-bold font-satoshi mt-4 mb-4">
            {project.title}
          </h2>
          
          <p className="text-foreground-muted mb-6">
            {project.description}
          </p>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-sm bg-white/5 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-bg text-white font-medium"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
            >
              <Github size={18} />
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Explore our portfolio of successful projects delivered for clients across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="pt-0">
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'gradient-bg text-white'
                  : 'bg-white/5 text-foreground-muted hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <AnimatedCard key={project.id} delay={index * 0.05}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                          View Details
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold font-satoshi mb-2 group-hover:gradient-text transition-all">
                        {project.title}
                      </h3>
                      
                      <p className="text-foreground-muted text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 rounded-md text-xs bg-white/5 text-foreground-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </>
  )
}
