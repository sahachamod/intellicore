'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section, { SectionHeader } from '@/components/ui/Section'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { services } from '@/lib/data'

export default function HomeServices() {
  return (
    <Section id="services" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />
      
      <div className="relative z-10">
        <SectionHeader 
          title="Our Services" 
          subtitle="What We Do"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedCard 
              key={service.id} 
              delay={index * 0.1}
              className="group"
            >
              <div className="h-full rounded-2xl bg-background-secondary border border-white/5 hover:border-primary/30 transition-all duration-500 card-hover overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-background-secondary/50 to-transparent" />
                  
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-satoshi mb-3 group-hover:gradient-text transition-all">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-light hover:text-white transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </Section>
  )
}
