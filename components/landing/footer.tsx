import Link from "next/link"
import Image from "next/image"

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15a6.34 6.34 0 0 0 6.33 6.33 6.34 6.34 0 0 0 6.33-6.33V8.75a8.18 8.18 0 0 0 4.77 1.52V6.84a4.83 4.83 0 0 1-1-.15z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export function Footer() {
  const contactEmail = "voicepill1@gmail.com"

  return (
    <footer className="border-t border-white/5 bg-black/30 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        {/* Main footer content */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          {/* Logo & brand */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="#" className="group flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Voice Pill Logo"
                  width={36}
                  height={36}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-base font-medium tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white">
                Voice Pill
              </span>
            </Link>
            <p className="max-w-xs text-center text-sm leading-relaxed text-white/30 md:text-left">
              Elevate your voice. Master your communication.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Contact
            </h4>
            <a
              href={`mailto:${contactEmail}`}
              className="group flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="border-b border-transparent transition-all duration-300 group-hover:border-white/30">
                {contactEmail}
              </span>
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-white/40 ring-1 ring-white/[0.06] transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:ring-white/[0.12] hover:scale-105"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/5 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/25 md:flex-row">
            <span>© {new Date().getFullYear()} Voice Pill. All rights reserved.</span>
            <div className="flex items-center gap-5">
              <Link href="#" className="transition-colors duration-300 hover:text-white/60">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors duration-300 hover:text-white/60">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
