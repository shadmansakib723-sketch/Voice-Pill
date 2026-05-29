import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#" className="flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <Image
              src="/logo.png"
              alt="Voice Pill Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-sm font-medium tracking-tight">Voice Pill</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-white/60 transition-colors hover:text-white">
            Features
          </Link>
          <Link href="#about" className="text-sm text-white/60 transition-colors hover:text-white">
            About
          </Link>
          <Link href="#download" className="text-sm text-white/60 transition-colors hover:text-white">
            Download
          </Link>
        </div>

        <Button
          asChild
          size="sm"
          className="rounded-full bg-white text-black hover:bg-white/90"
        >
          <Link href="#download">Get App</Link>
        </Button>
      </nav>
    </header>
  )
}
