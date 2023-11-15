import Image from 'next/image'
import logo from '@/../public/images/logo/logo.webp'

const Footer = () => {
  return (
    <footer>
      <div>
        <Image src={logo} alt='logo' />
        <section></section>
      </div>
    </footer>
  )
}

export default Footer
