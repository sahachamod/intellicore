import Link from 'next/link'
import { companyInfo, socialLinks, footerLinks } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="relative bg-background-secondary border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold gradient-text font-satoshi">
                {companyInfo.name}
              </span>
            </Link>
            <p className="text-foreground-muted text-sm leading-relaxed mb-6">
              Building the Future of Digital Innovation. We transform ideas into cutting-edge software solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-foreground-muted hover:text-white hover:bg-white/10 transition-all"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 font-satoshi">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 font-satoshi">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 font-satoshi">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-foreground-muted text-sm">hello@inellicre.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground-muted text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground-muted text-sm">123 Tech Street<br />San Francisco, CA 94102</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-muted text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground-muted hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground-muted hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
