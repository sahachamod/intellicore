'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, companyInfo } from '@/lib/data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'glass py-3 shadow-lg shadow-black/20' 
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text font-satoshi">
              {companyInfo.name}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-white relative group',
                  pathname === link.href ? 'text-white' : 'text-foreground-muted'
                )}
              >
                {link.name}
                <span className={cn(
                  'absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg transition-all duration-300 group-hover:w-full',
                  pathname === link.href ? 'w-full' : ''
                )} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white gradient-bg rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-[280px] glass p-6">
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} className="text-foreground" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      'text-lg font-medium py-2 transition-colors',
                      pathname === link.href 
                        ? 'gradient-text' 
                        : 'text-foreground-muted hover:text-white'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white gradient-bg rounded-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
