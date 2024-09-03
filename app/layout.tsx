import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header'
import Sidebar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Enes Malik Duman',
  description: 'Enes Malik Duman - Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <Sidebar />
          <div className='flex flex-col w-4/5 h-screen'>
            <Header />
            <main className='w-full h-full'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
