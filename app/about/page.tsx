'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Award } from 'lucide-react'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { stats, timeline, team } from '@/lib/data'
import { Button } from '@/components/ui/Button'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              Innovating the Future, <span className="gradient-text">One Code at a Time</span>
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              We are a team of passionate technologists dedicated to building exceptional digital experiences that transform businesses and delight users.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background-secondary/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-satoshi mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  Founded in 2018, Inellicre started with a simple vision: to bridge the gap between complex technology and business needs. What began as a small team of developers has grown into a full-service technology company.
                </p>
                <p>
                  We believe that great software is born from the perfect blend of technical expertise, creative thinking, and deep understanding of user needs. Every project we undertake is an opportunity to push boundaries and deliver something extraordinary.
                </p>
                <p>
                  Today, we work with startups and enterprises alike, helping them navigate the ever-evolving technology landscape and achieve their digital transformation goals.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-xl bg-background-secondary/80 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold gradient-text font-satoshi mb-2">{new Date().getFullYear() - 2018}+</div>
                    <div className="text-foreground-muted">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedCard delay={0}>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all h-full">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-satoshi mb-3">Our Mission</h3>
              <p className="text-foreground-muted">
                To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create exceptional user experiences.
              </p>
            </div>
          </AnimatedCard>
          
          <AnimatedCard delay={0.1}>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all h-full">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-satoshi mb-3">Our Vision</h3>
              <p className="text-foreground-muted">
                To be the leading partner in digital transformation, known for delivering cutting-edge solutions that shape the future of technology.
              </p>
            </div>
          </AnimatedCard>
          
          <AnimatedCard delay={0.2}>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all h-full">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-satoshi mb-3">Our Values</h3>
              <p className="text-foreground-muted">
                Innovation, integrity, and client success drive everything we do. We believe in transparent partnerships and delivering on our promises.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </Section>

      <Section className="bg-background-secondary/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-satoshi mb-4">Our Journey</h2>
          <p className="text-foreground-muted">Key milestones that have shaped who we are today</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10 inline-block">
                    <span className="text-2xl font-bold gradient-text font-satoshi">{item.year}</span>
                    <h3 className="text-lg font-semibold mt-2 mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground-muted">{item.description}</p>
                  </div>
                </div>
                <div className="hidden lg:flex lg:w-1/2 justify-center">
                  <div className="w-4 h-4 rounded-full gradient-bg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-satoshi mb-4">Our Impact</h2>
          <p className="text-foreground-muted">Numbers that speak for themselves</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedCard key={stat.label} delay={index * 0.1}>
              <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-4xl md:text-5xl font-bold gradient-text font-satoshi mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-foreground-muted text-sm">{stat.label}</div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      <Section className="bg-background-secondary/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-satoshi mb-4">Meet Our Leadership</h2>
          <p className="text-foreground-muted">The team driving our vision forward</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.slice(0, 4).map((member, index) => (
            <AnimatedCard key={member.id} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all text-center group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary/30 group-hover:border-primary transition-colors"
                />
                <h3 className="font-semibold font-satoshi">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/team">
            <Button variant="secondary" size="lg">
              Meet the Full Team
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}
