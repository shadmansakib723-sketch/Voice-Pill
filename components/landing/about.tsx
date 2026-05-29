'use client'

import { useEffect, useRef, useState } from 'react'

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: '12ms', label: 'Latency', description: 'Ultra-low processing time' },
    { value: '100%', label: 'On-device', description: 'Complete privacy' },
    { value: '0', label: 'Tracking', description: 'No data collection' },
  ]

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative px-6 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div 
          className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Decorative gradient blur */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/[0.06] blur-3xl animate-pulse"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />

          {/* Content */}
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
              Our mission
            </p>
            <h2 
              id="about-heading"
              className={`mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Helping people communicate with more confidence and stronger presence.
            </h2>

            <p 
              className={`mt-6 text-pretty leading-relaxed text-white/60 md:text-lg transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              A <span className="text-white font-medium">communication-focused</span>{" "}
              <span className="text-white font-medium">voice enhancement</span> experience designed for{" "}
              <span className="text-white font-medium">confidence</span> and{" "}
              <span className="text-white font-medium">clarity</span>. Your voice {" "}
              <span className="text-white font-medium">deeper</span>,{" "}
              <span className="text-white font-medium">stronger</span>, simply you.
            </p>

            {/* Stats grid */}
            <div 
              className={`mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="group relative"
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="transition-transform duration-300 group-hover:scale-105">
                    <p className="text-2xl font-semibold tracking-tight md:text-3xl bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-white/40 font-medium">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-xs text-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {stat.description}
                    </p>
                  </div>
                  
                  {/* Hover effect */}
                  <div 
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
