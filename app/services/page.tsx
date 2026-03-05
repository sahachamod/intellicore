'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Section from '@/components/ui/Section'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { services } from '@/lib/data'

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              Comprehensive Tech <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              From concept to deployment, we offer end-to-end technology services tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background-secondary/30">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold font-satoshi mb-4">
                  {service.title}
                </h2>
                
                <p className="text-lg text-foreground-muted mb-6">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-foreground-muted">
                      <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:text-white transition-colors">
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl gradient-bg opacity-20" />
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-accent opacity-20" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-satoshi mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-foreground-muted mb-8">
            Let&apos;s discuss how we can help bring your vision to life. Our team is ready to tackle your most challenging technical requirements.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-medium"
            >
              Start Your Project
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>
      </Section>
    </>
  )
}
