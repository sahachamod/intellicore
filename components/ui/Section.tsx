'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 lg:py-28', className)}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={cn(
      'mb-12 lg:mb-16',
      align === 'center' ? 'text-center' : 'text-left'
    )}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary text-sm font-medium uppercase tracking-wider mb-3"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl lg:text-5xl font-bold font-satoshi"
      >
        {title}
      </motion.h2>
    </div>
  )
}
