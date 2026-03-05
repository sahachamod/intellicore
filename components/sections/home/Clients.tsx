'use client'

import { motion } from 'framer-motion'
import { clients } from '@/lib/data'

export default function Clients() {
  return (
    <section className="py-16 border-y border-white/5 bg-background-secondary/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-foreground-muted text-sm mb-10"
        >
          Trusted by innovative companies worldwide
        </motion.p>
        
        <div className="flex gap-8 overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-100%'] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
            className="flex gap-16 flex-shrink-0"
          >
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={`${client.name}-${index}`}
                className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
