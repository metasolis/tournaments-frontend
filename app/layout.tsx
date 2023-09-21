import Navbar from './components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dora Tournaments',
  description: 'Dora Data Science Tournaments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar /> {/*     Keeps the Navbar constant when moving between different pages */}
        {children}</body>
    </html>
  )
}
