'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Shield, Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import ParticleBackground from './ParticleBackground'

const features = [
  { icon: Zap, label: 'Lightning Fast' },
  { icon: Shield, label: 'Secure & Reliable' },
  { icon: Globe, label: 'Global Scale' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[150px] animate-pulse-glow animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[180px]" />
      
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Transforming Ideas Into Reality
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-satoshi leading-[1.1] mb-8"
          >
            <span className="text-white">Build Something</span>
            <br />
            <span className="gradient-text text-glow">Extraordinary</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We craft stunning digital experiences that captivate users and drive business growth. 
            From concept to deployment, we bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/contact">
              <Button size="lg" className="gap-2 px-8">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg" className="px-8">
                View Our Work
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 text-foreground-muted"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-primary-light" />
                </div>
                <span className="text-sm font-medium">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-12 text-center"
          >
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text font-satoshi mb-1">150+</div>
              <div className="text-sm text-foreground-subtle">Projects Delivered</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text font-satoshi mb-1">8+</div>
              <div className="text-sm text-foreground-subtle">Years Experience</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text font-satoshi mb-1">98%</div>
              <div className="text-sm text-foreground-subtle">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary-light"
          />
        </motion.div>
      </div>
    </section>
  )
}
