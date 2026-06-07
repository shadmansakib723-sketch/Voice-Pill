"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Download } from "lucide-react"

export default function CheckoutIosPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      {/* Top bar with logo */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-center px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center">
              <Image
                src="/logo.png"
                alt="Voice Pill Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium tracking-tight">
              Voice Pill
            </span>
          </Link>
        </nav>
      </header>

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl"
      />

      <div
        className="flex flex-1 flex-col items-center justify-center px-6 py-20 transition-all duration-700"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="w-full max-w-md">
          {/* Pricing Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl mb-6">
            {/* Price */}
            <div className="text-center mb-8 pb-8 border-b border-white/10">
              <div className="inline-flex items-baseline gap-1 mb-2">
                <span className="text-6xl font-bold">$19</span>
              </div>
              <p className="text-sm text-white/50">One-time payment • Lifetime access</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white mt-0.5">
                  <svg className="h-3 w-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">100 Voice & Delivery Analysis</p>
                  <p className="text-sm text-white/50 mt-0.5">Complete analysis of tone, pace, clarity & confidence</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white mt-0.5">
                  <svg className="h-3 w-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Personalized Training Routine</p>
                  <p className="text-sm text-white/50 mt-0.5">Customized exercises based on your goals</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white mt-0.5">
                  <svg className="h-3 w-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Develop a Deeper Voice</p>
                  <p className="text-sm text-white/50 mt-0.5">Build authority and command attention</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://checkout.dodopayments.com/buy/pdt_0NgWv9QZxKtsPsXPWBGJa?quantity=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-white text-base font-bold text-black transition-all hover:bg-white/90 active:scale-[0.98] cursor-pointer touch-manipulation"
            >
              <Download className="h-5 w-5" />
              Get Voice Pill Now
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 text-xs text-white/40">
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
