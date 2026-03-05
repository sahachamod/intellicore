'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'gradient-bg text-white hover:opacity-90 hover:scale-[1.02]',
        secondary: 'bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
        ghost: 'bg-transparent text-foreground-muted hover:text-white hover:bg-white/5',
        outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10',
      },
      size: {
        sm: 'h-8 px-4 rounded-lg',
        md: 'h-11 px-6 rounded-lg',
        lg: 'h-14 px-8 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface ButtonProps 
  extends VariantProps<typeof buttonVariants> {
  children?: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, disabled, type, onClick }, ref) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
