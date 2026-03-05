'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Section, { SectionHeader } from '@/components/ui/Section'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { projects } from '@/lib/data'

const categories = ['All', 'Web', 'Mobile', 'AI']

export default function HomePortfolio() {
  const [filter, setFilter] = useState('All')
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <Section id="portfolio" className="bg-background-secondary/30">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="Our Work"
      />
      
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
        {filteredProjects.slice(0, 6).map((project, index) => (
          <AnimatedCard 
            key={project.id} 
            delay={index * 0.1}
            className="group"
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
                  <Link 
                    href="/portfolio"
                    className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </Link>
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
          </AnimatedCard>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link href="/portfolio">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl gradient-bg text-white font-medium"
          >
            View All Projects
            <ArrowRight size={18} />
          </motion.button>
        </Link>
      </div>
    </Section>
  )
}
