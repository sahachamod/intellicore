'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Section from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary-light" />
            <span className="text-sm text-foreground-muted">Let&apos;s Build Something Amazing</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
            Ready to transform your <span className="gradient-text">business?</span>
          </h2>
          
          <p className="text-lg text-foreground-muted mb-10 max-w-xl mx-auto">
            Join hundreds of satisfied clients who have transformed their digital presence with us. 
            Let&apos;s discuss your project and bring your vision to life.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-foreground-subtle focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
              <Button type="submit" size="lg" className="gap-2 whitespace-nowrap">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-accent-green/10 border border-accent-green/20 inline-block"
            >
              <p className="text-accent-green font-medium text-lg">
                Thank you! We&apos;ll be in touch soon.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Section>
  )
}
