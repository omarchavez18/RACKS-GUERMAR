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
    <nav className={`navbar  bg-body-tertiary  ${style.nav} `}>
      {/* FIRST SECTION */}

      {/* ICONOS */}
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

        {/* LOGO */}
        <div>
          <Link className={`navbar-brand ${style.logo}`} href='#'>
            <Image src={logo} alt='guermar logo' width={200} height={50} />
          </Link>
        </div>

        <div>
          {/* SIDE MENU */}
          <div
            className={`container-fluid ${style.sideMenu}`}
            style={{ padding: '0' }}
          >
            <div className={'container-fluid'}>
              <button
                className={'navbar-toggler'}
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasNavbar'
                aria-controls='offcanvasNavbar'
                aria-label='Toggle navigation'
              >
                <span className={'navbar-toggler-icon'}></span>
              </button>
              <div
                className={`offcanvas offcanvas-end ${style.offCanvasEnd}`}
                tabIndex='-1'
                id='offcanvasNavbar'
                aria-labelledby='offcanvasNavbarLabel'
              >
                <div className={`offcanvas-header ${style.offCanvasHeader} `}>
                  <h1 className={'offcanvas-title'} id='offcanvasNavbarLabel'>
                    Menu
                  </h1>
                  <button
                    type='button'
                    className={'btn-close bg-danger'}
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                  />
                </div>
                <div className={'offcanvas-body'}>
                  <ul
                    className={`navbar-nav justify-content-end flex-grow-1 pe-3 ${style.offCanvasBodyUl}`}
                  >
                    <Link
                      className={'nav-link active'}
                      aria-current='page'
                      href={'/'}
                    >
                      <Li className={'nav-item'}>
                        <h4>Inicio</h4>
                      </Li>
                    </Link>
                    <Link
                      className={'nav-link'}
                      aria-current='page'
                      href={'/productos'}
                    >
                      <Li className={'nav-item'}>
                        <h4> Productos</h4>
                      </Li>
                    </Link>
                    <Link
                      className={'nav-link'}
                      aria-current='page'
                      href='/servicios'
                    >
                      <Li className={'nav-item'}>
                        <h4> Servicios</h4>
                      </Li>
                    </Link>
                    <Link
                      className={'nav-link'}
                      aria-current='page'
                      href='/contacto'
                    >
                      <Li className={'nav-item'}>
                        <h4>Contacto</h4>
                      </Li>
                    </Link>
                    <Link
                      className={'nav-link'}
                      aria-current='page'
                      href='/quienes-somos'
                    >
                      <Li className={'nav-item'}>
                        <h4>Quienes Somos</h4>
                      </Li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEPARADOR DE COLOR */}
      <div className={style.separador} />

      {/* BARRA DE MENU  */}
      <div className={`${style.secondSection}`} id='navbarNav'>
        <ul className='navbar-nav '>
          <Li className='nav-item '>
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
    </nav>
  )
}

export default Navbar
