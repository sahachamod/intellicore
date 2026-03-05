# Tech Company Portfolio Website - SPEC.md

## 1. Project Overview

**Project Name:** Inellicre - Tech Company Portfolio
**Project Type:** Multi-page Website (Next.js App Router)
**Core Functionality:** Premium tech company portfolio showcasing services, projects, team, and blog with immersive animations and modern design
**Target Users:** Potential clients, partners, job seekers, and tech enthusiasts

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Global Layout:**
- Sticky glassmorphic navbar (height: 72px)
- Main content area with smooth page transitions
- Footer with 4-column layout (company info, quick links, services, contact)
- Maximum content width: 1400px
- Side padding: 24px (mobile), 48px (tablet), 80px (desktop)

**Responsive Breakpoints:**
- Mobile: 0-639px
- Tablet: 640px-1023px
- Desktop: 1024px+
- Large Desktop: 1280px+

### 2.2 Visual Design

**Color Palette:**
```
--background: #0a0a0f (Deep space black)
--background-secondary: #12121a (Card background)
--foreground: #fafafa (Primary text)
--foreground-muted: #a1a1aa (Secondary text)
--primary: #3b82f6 (Electric blue)
--primary-hover: #2563eb (Darker blue)
--secondary: #8b5cf6 (Violet)
--accent: #06b6d4 (Cyan)
--accent-green: #10b981 (Success green)
--gradient-1: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)
--gradient-2: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)
--border: rgba(255, 255, 255, 0.08)
--glass: rgba(18, 18, 26, 0.7)
--glass-border: rgba(255, 255, 255, 0.1)
```

**Typography:**
- Primary Font: "Satoshi" (headings) - https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap
- Secondary Font: "General Sans" (body) - https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap
- Fallback: system-ui, sans-serif

**Font Sizes:**
- H1: 72px / 80px line-height (mobile: 40px)
- H2: 48px / 56px line-height (mobile: 32px)
- H3: 32px / 40px line-height (mobile: 24px)
- H4: 24px / 32px line-height
- Body Large: 18px / 28px line-height
- Body: 16px / 24px line-height
- Small: 14px / 20px line-height
- Caption: 12px / 16px line-height

**Spacing System:**
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px
- 5xl: 128px

**Visual Effects:**
- Glassmorphism: backdrop-blur(20px), background: var(--glass), border: 1px solid var(--glass-border)
- Card shadows: 0 8px 32px rgba(0, 0, 0, 0.3)
- Hover shadows: 0 16px 48px rgba(59, 130, 246, 0.15)
- Border radius: 8px (small), 12px (medium), 16px (large), 24px (xl)
- Gradient text: background-clip: text, -webkit-text-fill-color: transparent

### 2.3 Components

**Navbar:**
- Fixed position, glassmorphic background
- Logo (left): "INELLICRE" text with gradient
- Navigation links (center): Home, About, Services, Portfolio, Team, Blog, Contact
- CTA Button (right): "Get Started" with gradient background
- Mobile: Hamburger menu with slide-in drawer

**Footer:**
- 4-column grid layout
- Column 1: Logo, description, social icons
- Column 2: Quick Links
- Column 3: Services
- Column 4: Contact info
- Bottom bar: Copyright, legal links

**Buttons:**
- Primary: Gradient background (blue to violet), white text, hover scale(1.02)
- Secondary: Transparent with border, gradient text
- Ghost: No background, subtle hover
- Sizes: sm (32px height), md (44px height), lg (56px height)

**Cards:**
- Glassmorphic background
- Subtle border
- Hover: translateY(-4px), enhanced shadow, border glow
- Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

**Section Wrapper:**
- Max-width container
- Optional gradient background
- Scroll reveal animation on viewport entry

---

## 3. Functionality Specification

### 3.1 Core Features

**Navigation:**
- Smooth scroll to sections (single page feel for home)
- Active link highlighting
- Mobile drawer with animated open/close
- Navbar background opacity change on scroll

**Animations (Framer Motion):**
- Page transitions: Fade + slide (0.3s)
- Scroll reveal: Stagger children animation (0.1s delay each)
- Hover effects: Scale, translate, shadow transitions
- Counter animations: Number counting up for stats
- Parallax: Subtle parallax on scroll

**Three.js Background:**
- Floating particles in hero section
- Subtle, non-distracting
- Performance optimized (limited particles)
- Dark theme compatible

### 3.2 Pages Detail

**Home Page:**
1. Hero Section
   - Headline: "Building the Future of Digital Innovation"
   - Subheadline: "We transform ideas into cutting-edge software solutions that drive growth and deliver exceptional user experiences."
   - CTA: "Start Your Project" + "View Our Work"
   - Animated gradient orbs in background
   - Three.js particle field

2. Trusted By Section
   - 6-8 client logos in grayscale, hover to color
   - Infinite scroll animation (marquee)

3. Services Section
   - 6 service cards in 3x2 grid (2x3 on tablet, 1x6 on mobile)
   - Services: Web Development, Mobile Apps, UI/UX Design, Cloud Solutions, AI & ML, Consulting
   - Icon + title + description + "Learn more" link

4. Portfolio Section
   - Section title + filter tabs (All, Web, Mobile, AI, Design)
   - 6 project cards with image, title, category, tech tags
   - Hover: Overlay with "View Project" button

5. Tech Stack Section
   - Grid of technology logos (React, Next.js, TypeScript, Python, AWS, etc.)
   - Subtle hover animation

6. Testimonials Section
   - 3 testimonial cards with quote, author name, company, avatar
   - Auto-rotate with manual navigation

7. CTA Section
   - "Ready to transform your business?"
   - Email input + submit button
   - Gradient background

**About Page:**
- Hero: "About Inellicre" with company intro
- Story section: Company history with timeline
- Mission/Vision cards
- Stats counters: 150+ Projects, 8+ Years, 50+ Team, 98% Satisfaction
- Team preview (link to Team page)

**Services Page:**
- Hero: "Our Services"
- 6 detailed service sections with icons
- Each service: Title, description, features list, related projects link

**Portfolio Page:**
- Hero: "Our Work"
- Filter tabs
- 9 project cards with modal preview
- Each project: Title, description, images, tech stack, live link

**Team Page:**
- Hero: "Meet Our Team"
- 8 team member cards
- Each: Photo, name, role, bio snippet, social links

**Blog Page:**
- Hero: "Latest Insights"
- Featured blog post (large card)
- Blog grid (6 posts)
- Categories sidebar
- Each post: Image, title, excerpt, date, read time, category tag

**Contact Page:**
- Hero: "Get In Touch"
- Contact form: Name, email, company, message
- Contact info: Email, phone, address
- Map embed (placeholder)

### 3.3 Data Handling

- Static data stored in separate files (data/services.ts, data/projects.ts, etc.)
- No backend required
- Form submission shows success message (placeholder)

---

## 4. Technical Specification

### 4.1 Project Structure
```
inellicre/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── team/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   └── globals.css
├── components/
│   ├── ui/ (Shadcn components)
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx
│   └── sections/
│       ├── home/
│       ├── about/
│       ├── services/
│       ├── portfolio/
│       ├── team/
│       ├── blog/
│       └── contact/
├── lib/
│   ├── utils.ts
│   └── data.ts
├── public/
│   └── images/
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

### 4.2 Dependencies
```json
{
  "next": "14.x",
  "react": "18.x",
  "typescript": "5.x",
  "tailwindcss": "3.x",
  "framer-motion": "11.x",
  "three": "0.160.x",
  "@react-three/fiber": "8.x",
  "@react-three/drei": "9.x",
  "lucide-react": "0.x",
  "clsx": "2.x",
  "tailwind-merge": "2.x",
  "class-variance-authority": "0.7.x"
}
```

---

## 5. Acceptance Criteria

### Visual Checkpoints:
- [ ] Dark theme with blue/violet/cyan gradient accents
- [ ] Glassmorphic navbar with blur effect
- [ ] Smooth scroll animations on all sections
- [ ] Three.js particles visible in hero section
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] All hover effects working (cards, buttons, links)
- [ ] Page transitions are smooth

### Functionality Checkpoints:
- [ ] All navigation links work correctly
- [ ] Mobile menu opens/closes properly
- [ ] Filter tabs work on Portfolio page
- [ ] Contact form shows validation feedback
- [ ] Scroll reveal animations trigger on viewport entry
- [ ] No console errors on any page

### Performance Checkpoints:
- [ ] Page loads without critical errors
- [ ] Three.js doesn't cause frame drops
- [ ] Images are properly optimized (Next.js Image)
- [ ] Build completes successfully

---

## 6. Placeholder Content

**Company Info:**
- Name: Inellicre
- Tagline: "Building the Future of Digital Innovation"
- Email: hello@inellicre.com
- Phone: +1 (555) 123-4567
- Address: 123 Tech Street, San Francisco, CA 94102
- Founded: 2018

**Services:**
1. Web Development - Full-stack web applications
2. Mobile App Development - iOS & Android apps
3. UI/UX Design - User-centered design
4. Cloud Solutions - AWS, Azure, GCP
5. AI & Machine Learning - Intelligent solutions
6. Tech Consulting - Strategic guidance

**Projects:** (9 total)
- FinTech Dashboard
- E-commerce Platform
- Health App
- AI Analytics Tool
- SaaS Platform
- Real Estate App
- Logistics Dashboard
- EdTech Platform
- Crypto Wallet

**Team:** (8 members)
- CEO, CTO, COO
- Lead Developers (2)
- UI/UX Designer
- Data Scientist
- DevOps Engineer
- Marketing Lead

**Blog Posts:** (6 posts)
- Future of AI in 2026
- Web Development Trends
- Mobile App Best Practices
- Cloud Architecture Guide
- UX Design Principles
- Tech Startup Tips
