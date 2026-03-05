'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Section, { SectionHeader } from '@/components/ui/Section'
import { testimonials } from '@/lib/data'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <Section className="bg-background-secondary/30">
      <SectionHeader 
        title="What Clients Say" 
        subtitle="Testimonials"
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 font-satoshi">
                "{testimonials[current].quote}"
              </blockquote>
              
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].author}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary/30"
                />
                <div className="font-semibold text-white">{testimonials[current].author}</div>
                <div className="text-foreground-muted">{testimonials[current].company}</div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground-muted hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrent(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'w-8 gradient-bg' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground-muted hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
