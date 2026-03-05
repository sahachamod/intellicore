'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { blogPosts } from '@/lib/data'

const categories = [
  'All',
  'AI & Machine Learning',
  'Web Development',
  'Mobile Development',
  'Cloud & DevOps',
  'Design',
  'Business',
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

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
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-satoshi mb-6">
              Latest <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Stay updated with the latest trends, technologies, and insights from our experts.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="pt-0">
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/5 text-foreground-muted hover:text-white hover:bg-white/10"
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatedCard>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all mb-12">
            <div className="aspect-[16/10] lg:aspect-auto rounded-xl overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary w-fit mb-4">
                {featuredPost.category}
              </span>
              
              <h2 className="text-2xl md:text-3xl font-bold font-satoshi mb-4 hover:gradient-text transition-all cursor-pointer">
                {featuredPost.title}
              </h2>
              
              <p className="text-foreground-muted mb-4 line-clamp-3">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-foreground-muted mb-6">
                <span>{featuredPost.author}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {featuredPost.readTime}
                </span>
              </div>
              
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-white transition-colors"
              >
                Read More
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <AnimatedCard key={post.id} delay={index * 0.1}>
              <div className="group rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary w-fit mb-3">
                    {post.category}
                  </span>
                  
                  <h3 className="text-lg font-semibold font-satoshi mb-3 group-hover:gradient-text transition-all">
                    {post.title}
                  </h3>
                  
                  <p className="text-foreground-muted text-sm mb-4 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs text-foreground-muted">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>
    </>
  )
}
