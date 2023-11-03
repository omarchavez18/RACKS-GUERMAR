import Link from 'next/link'
import Image from 'next/image'
import Li from '../listItem/Li'
import style from './navbar.module.scss'
import logo from '@/../src/../public/images/logo/logo.webp'
import instagramIcon from '@/../src/../public/icons/instagram.svg'
import whatsappIcon from '@/../src/../public/icons/whatsapp.svg'
import facebookIcon from '@/../src/../public/icons/facebook.svg'

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary ${style.nav} `}
      style={{ border: 'solid black .1rem' }}
    >
      <div className={style.firstSection}>
        <section>
          <Link href={'/'}>
            <Image
              src={instagramIcon}
              alt='instagram icon'
              height={20}
              width={20}
            />
          </Link>
          <Link href={'/'}>
            <Image
              src={whatsappIcon}
              alt='whatsapp icon'
              height={20}
              width={20}
            />
          </Link>
          <Link href={'/'}>
            <Image
              src={facebookIcon}
              alt='facebook icon'
              height={20}
              width={20}
            />
          </Link>
        </section>

        <div>
          <Link className='navbar-brand' href='#'>
            <Image src={logo} alt='guermar logo' width={200} height={50} />
          </Link>
        </div>
      </div>

      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className={`collapse navbar-collapse ${style.secondSection}`}
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <Li className='nav-item'>
              <Link className='nav-link active' aria-current='page' href='/'>
                Inicio
              </Link>
            </Li>
            <Li className='nav-item'>
              <Link className='nav-link' href='/productos'>
                Productos
              </Link>
            </Li>
            <Li className='nav-item'>
              <Link className='nav-link' href='servicios'>
                Servicios
              </Link>
            </Li>
            <Li className='nav-item'>
              <Link className='nav-link' href='/contacto'>
                Contacto
              </Link>
            </Li>
            <Li className='nav-item'>
              <Link className='nav-link' href='/quienes-somos'>
                Quienes somos
              </Link>
            </Li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
