'use client'

import { motion } from 'framer-motion'
import Section, { SectionHeader } from '@/components/ui/Section'
import { techStack } from '@/lib/data'

export default function TechStack() {
  return (
    <Section>
      <SectionHeader 
        title="Technologies We Use" 
        subtitle="Tech Stack"
      />
      
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="group"
          >
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col items-center gap-3">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 object-contain filter brightness-90 invert opacity-70 group-hover:opacity-100 group-hover:invert-0 transition-all duration-300"
              />
              <span className="text-sm text-foreground-muted group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
