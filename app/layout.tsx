import './globals.css'
import { Inter, Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400', style: 'normal', subsets:['latin'] })

export const metadata = {
  title: 'Micmar',
  description: 'Micmar e-commerce webapp.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
