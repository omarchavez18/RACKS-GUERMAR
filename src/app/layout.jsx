import { openSans } from '@/../public/fonts/fonts'
import './../globals/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/navbar/Navbar'
import BootstrapClient from '@/components/bootstrapClient/BootstrapClient'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Guermar Muebles Metalicos',
  description: 'Empresa dedicada a la construcción de racks industriales.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <Navbar />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  )
}
