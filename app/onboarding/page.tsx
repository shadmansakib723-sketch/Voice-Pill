"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowRight, ArrowLeft, Check, Download, Sparkles } from "lucide-react"

/* ─── data ─── */
const steps = [
  {
    id: "goal",
    question: "What is your main goal?",
    options: [
      "Get a deeper voice",
      "Speak with confidence",
      "Sound richer and fuller"
    ]
  },
  {
    id: "identify",
    question: "How do you identify?",
    options: [
      "Male",
      "Female",
      "Prefer not to say"
    ]
  },
  {
    id: "challenge",
    question: "What's your biggest speaking challenge?",
    options: [
      "Weak or unclear voice",
      "Speak too fast or slow",
      "Hard to show emotion",
      "Mumbling or unclear speech",
      "Nervous or anxious"
    ]
  },
  {
    id: "style",
    question: "Create your own speaking style?",
    options: [
      "Yes",
      "No"
    ]
  },
  {
    id: "time",
    question: "How long will you train daily?",
    options: [
      "5–10 minutes",
      "10–20 minutes",
      "20+ minutes"
    ]
  },
  {
    id: "presence",
    question: "What kind of presence do you want your voice to have?",
    options: [
      "Command attention",
      "Inspire respect",
      "Show confidence and conviction",
      "Be persuasive and influential",
      "Be calm and soothing"
    ]
  },
  {
    id: "confidence",
    question: "How confident do you feel about your voice right now?",
    options: [
      "Very confident",
      "Somewhat confident",
      "Neutral",
      "Not confident at all"
    ]
  },
  {
    id: "frequency",
    question: "How often do you speak publicly or with groups?",
    options: [
      "Daily",
      "Weekly",
      "Occasionally"
    ]
  }
]

/* ─── component ─── */
export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const [completed, setCompleted] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showDeviceModal, setShowDeviceModal] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLastStep = currentStep === steps.length - 1
  const step = steps[currentStep]

  function handleSelect(label: string) {
    setSelectedOption(label)
  }

  function handleNext() {
    if (!selectedOption || animating) return

    setAnswers((prev) => ({ ...prev, [step.id]: selectedOption }))
    setDirection("forward")
    setAnimating(true)

    setTimeout(() => {
      if (isLastStep) {
        setCompleted(true)
      } else {
        setCurrentStep((s) => s + 1)
        // restore previous answer if going back-forward
        const nextStep = steps[currentStep + 1]
        setSelectedOption(answers[nextStep.id] ?? null)
      }
      setAnimating(false)
    }, 400)
  }

  function handleBack() {
    if (currentStep === 0 || animating) return

    setDirection("backward")
    setAnimating(true)

    setTimeout(() => {
      setCurrentStep((s) => s - 1)
      const prevStep = steps[currentStep - 1]
      setSelectedOption(answers[prevStep.id] ?? null)
      setAnimating(false)
    }, 400)
  }

  /* ── result screen ── */
  if (completed) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-black px-6 pt-4 text-white">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-2xl"
        />

        <div
          className="flex flex-col items-center text-center transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
          }}
        >
          {/* Animated check */}
          <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] shadow-[0_0_60px_-10px_rgba(255,255,255,0.3)]">
            <Check className="h-8 w-8 text-white" strokeWidth={3} />
            <div className="absolute inset-0 animate-ping rounded-full bg-white/10" />
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            You&apos;re all set,{" "}
            <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
              future speaker.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-pretty text-base text-white/50 md:text-lg">
            We&apos;ve built a personalized plan for you based on your answers.
          </p>

          {/* Summary chips */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {Object.entries(answers).map(([key, val]) => (
              <span
                key={key}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 backdrop-blur"
              >
                <Sparkles className="h-3.5 w-3.5 text-white/40" />
                {val}
              </span>
            ))}
          </div>

          {/* Download CTA */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={() => setShowDeviceModal(true)}
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-base font-bold text-black transition-all hover:bg-white/90 active:scale-95 cursor-pointer touch-manipulation"
            >
              <Download className="h-5 w-5" />
              Download Voice Pill
            </button>
          </div>
        </div>

        {/* Device Selection Modal */}
        {showDeviceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-6">
            <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-black/95 p-8 shadow-[0_0_80px_-10px_rgba(255,255,255,0.3)]">
              <button
                type="button"
                onClick={() => setShowDeviceModal(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-2xl font-semibold text-white mb-2">
                Choose Your Device
              </h3>
              <p className="text-white/50 text-sm mb-8">
                Select your platform to continue
              </p>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => router.push('/checkout?device=android')}
                  className="group w-full flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-left transition-all hover:border-white/30 hover:bg-white/[0.08] active:scale-[0.98] cursor-pointer touch-manipulation"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                    <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52M7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-medium text-white">Android</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                </button>

                <button
                  type="button"
                  onClick={() => router.push('/checkout?device=ios')}
                  className="group w-full flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-left transition-all hover:border-white/30 hover:bg-white/[0.08] active:scale-[0.98] cursor-pointer touch-manipulation"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                    <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-medium text-white">iOS</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  /* ── question screens ── */
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white">
      {/* Background effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
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

          {/* Progress indicator */}
          <div className="flex flex-col items-center gap-3">
            <div className="h-1.5 w-full max-w-[200px] overflow-hidden rounded-full bg-white/10">
              <div 
                className="h-full rounded-full bg-white transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <span className="text-sm text-white/50 tabular-nums">
              {currentStep + 1} of {steps.length}
            </span>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 pt-20 pb-32">
        <div
          className="mx-auto w-full max-w-xl transition-all duration-400 ease-out"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? direction === "forward"
                ? "translateX(-40px)"
                : "translateX(40px)"
              : "translateX(0)",
          }}
        >
          {/* Question */}
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
            {step.question}
          </h1>

          {/* Options */}
          <div className="mt-10 grid gap-3">
            {step.options.map((option) => {
              const isSelected = selectedOption === option
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`group relative flex items-center rounded-2xl border-2 px-5 py-4 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-white bg-white"
                      : "border-transparent bg-white/[0.05] hover:bg-white/[0.08]"
                  }`}
                >
                  <p className={`flex-1 text-base font-medium transition-colors ${
                    isSelected ? "text-black" : "text-white/70"
                  }`}>
                    {option}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-xl items-center justify-between px-6">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 text-sm transition-all ${
              currentStep === 0
                ? "cursor-not-allowed opacity-30"
                : "text-white/70 hover:bg-white/5 hover:text-white"
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!selectedOption}
            className={`group inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-medium transition-all ${
              selectedOption
                ? "bg-white text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:bg-white/90 hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.7)]"
                : "cursor-not-allowed bg-white/10 text-white/30"
            }`}
          >
            {isLastStep ? "See My Plan" : "Continue"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  )
}