import { openSans } from '@/../public/fonts/fonts'
import './../globals/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/navbar/Navbar'
import BootstrapClient from '@/components/bootstrapClient/BootstrapClient'
import Footer from '@/components/footer/Footer'
import FloatingButton from '@/components/floatingButton/FloatingButton'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: 'Racks Guermar | Inicio',
  description:
    'Somos fabricantes con experiencia de más de 30 años en soluciones de almacenamiento. Ofrecemos una amplia gama de racks y estanterías metálicas diseñadas para maximizar la eficiencia y el espacio en tu negocio.',

  icons: {
    icon: ['/favicon.ico?v=1'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
  keywords: [
    'racks, rack picking, mezzanine, anaquel, estanteria, escaleras, mesas, elevadores, cajon hormero, gabinete, herreria, muebles metalicos, guermar',
  ],

  authors: [{ name: 'Omar Chavez Gutierrez de Velasco', url: '' }],
  aplicationName: 'Racks Guermar',
  creator: 'Omar Chavez Gutierrez de Velasco',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <GoogleTagManager gtmId='GTM-T6LFV79N' />
        <GoogleAnalytics gaId='AW-587425054' />
      </head>
      <body className={openSans.className}>
        <Navbar />
        {children}
        <BootstrapClient />
        <FloatingButton />
        <Footer />
      </body>
    </html>
  )
}
