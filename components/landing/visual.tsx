"use client"

import { useEffect, useState } from "react"

const screens = [
  { src: "/app-home.jpeg", alt: "Home screen showing voice training plan" },
  { src: "/app-explore.jpeg", alt: "Explore screen with voice exercises" },
  { src: "/app-analysis.jpeg", alt: "Voice analysis results" },
]

export function Visual() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % screens.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative px-6 pb-24 md:pb-32">
      <div className="relative mx-auto max-w-5xl">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 mx-auto h-[560px] max-w-3xl rounded-full bg-white/[0.06] blur-3xl"
        />

        <div className="relative mx-auto flex flex-col items-center">
          {/* iPhone 15 frame */}
          <div className="relative w-[300px] md:w-[340px]">
            {/* Side buttons */}
            <span
              aria-hidden
              className="absolute -left-[3px] top-[110px] h-8 w-[3px] rounded-l-sm bg-neutral-800"
            />
            <span
              aria-hidden
              className="absolute -left-[3px] top-[160px] h-14 w-[3px] rounded-l-sm bg-neutral-800"
            />
            <span
              aria-hidden
              className="absolute -left-[3px] top-[220px] h-14 w-[3px] rounded-l-sm bg-neutral-800"
            />
            <span
              aria-hidden
              className="absolute -right-[3px] top-[180px] h-20 w-[3px] rounded-r-sm bg-neutral-800"
            />

            {/* Outer titanium bezel */}
            <div className="relative aspect-[9/19.5] w-full rounded-[2.75rem] bg-gradient-to-b from-neutral-700 via-neutral-900 to-neutral-800 p-[3px] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)]">
              {/* Inner frame */}
              <div className="relative h-full w-full rounded-[2.6rem] bg-black p-[8px]">
                {/* Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-black">
                  {/* Dynamic Island */}
                  <div className="absolute left-1/2 top-2 z-20 h-[26px] w-[95px] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/5">
                    <span className="absolute right-3 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-neutral-800" />
                  </div>

                  {/* Stacked image carousel */}
                  {screens.map((s, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={s.src}
                      alt={s.alt}
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
                      style={{
                        opacity: i === index ? 1 : 0,
                        zIndex: i === index ? 10 : 0,
                      }}
                    />
                  ))}

                  {/* Subtle screen reflection */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-10 rounded-[2.1rem] bg-gradient-to-br from-white/[0.06] via-transparent to-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pagination indicators */}
          <div
            className="mt-6 flex items-center gap-2"
            role="tablist"
            aria-label="App screen carousel"
          >
            {screens.map((s, i) => {
              const active = i === index
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Go to ${s.alt}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    active ? "w-8 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              )
            })}
          </div>

          {/* Floating callouts */}
          <div className="absolute -left-4 top-16 hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur md:block">
            <p className="text-[10px] uppercase tracking-widest text-white/40">Latency</p>
            <p className="mt-1 font-mono text-sm text-white">12ms</p>
          </div>

          <div className="absolute -right-6 bottom-24 hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur md:block">
            <p className="text-[10px] uppercase tracking-widest text-white/40">Clarity</p>
            <p className="mt-1 font-mono text-sm text-white">+38%</p>
          </div>
        </div>
      </div>
    </section>
  )
}
