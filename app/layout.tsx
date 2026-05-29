import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Voice Pill",
  description:
    "When you master communication, you'll naturally speak with confidence, influence others, and command attention in any situation. Every conversation becomes an opportunity to win trust, make friends, and leave a lasting impression. You'll project charisma, power, and presence, inspiring people to listen, respect, and follow your lead. With these skills, you don't just talk, you connect, persuade, and create impact, becoming someone whose words carry authority and authenticity.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
