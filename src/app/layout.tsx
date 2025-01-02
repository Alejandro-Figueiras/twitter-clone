import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Twitter Clone',
  description: 'Made by Alejandro Figueiras'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${inter.className} dark`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
