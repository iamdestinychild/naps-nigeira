import Nav from '@/components/Nav'
import './globals.css'
import Footer from '@/components/Footer'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naps Nigeria | Home',
  description: 'National Association Of Physics Students'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-inter' suppressHydrationWarning={true}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
