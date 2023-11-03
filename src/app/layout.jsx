import { Inter } from 'next/font/google'
import './../globals/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/navbar/Navbar'
import BootstrapClient from '@/components/bootstrapClient/BootstrapClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Guermar Muebles Metalicos',
  description: 'Empresa dedicada a la construcción de racks industriales.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  )
}
