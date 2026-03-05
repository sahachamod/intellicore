'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Section from '@/components/ui/Section'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { team } from '@/lib/data'

export default function TeamPage() {
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
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              Meet the <span className="gradient-text">Innovators</span>
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              A talented team of developers, designers, and strategists dedicated to delivering exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-background-secondary/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <AnimatedCard key={member.id} delay={index * 0.1}>
              <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all text-center h-full">
                <div className="relative mb-6 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors mx-auto"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-lg font-semibold font-satoshi mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-foreground-muted text-sm mb-4 line-clamp-2">
                  {member.bio}
                </p>
                
                <div className="flex justify-center gap-3">
                  <a
                    href={member.social.twitter}
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-foreground-muted hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-foreground-muted hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={member.social.github}
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-foreground-muted hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="mailto:hello@inellicre.com"
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-foreground-muted hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-satoshi mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-foreground-muted mb-8">
            We&apos;re always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <motion.a
            href="mailto:careers@inellicre.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-medium"
          >
            View Open Positions
          </motion.a>
        </div>
      </Section>
    </>
  )
}
