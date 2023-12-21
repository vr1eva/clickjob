import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable)}>
          <Button><Link href="/jobs">Jobs</Link></Button>
          {children}</body>
      </html>
    </ClerkProvider>
  )
}
