import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naps Nigeria | Home',
  description: 'National Association Of Physics Students'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-roboto'>{children}</body>
    </html>
  )
}
