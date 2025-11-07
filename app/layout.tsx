import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jammu Kaladi Cafe - Authentic Jammu Cheese Delights',
  description: 'Experience the authentic taste of Jammu with our specialty Kaladi cheese pizzas, burgers, and more. Located in Greater Noida Extension.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
