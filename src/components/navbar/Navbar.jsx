'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Li from '../listItem/Li'
import style from './navbar.module.scss'
import logo from '@/../src/../public/images/logo/logo.webp'
import instagramIcon from '@/../src/../public/icons/instagram.svg'
import whatsappIcon from '@/../src/../public/icons/whatsapp.svg'
import facebookIcon from '@/../src/../public/icons/facebook.svg'

const Navbar = () => {
  const pathname = usePathname()
  // CLOSE SIDE NAVBAR
  function closeSideNavbar() {
    let sideNavbar = document.querySelector('.navbar-toggler')
    return sideNavbar.click()
  }

  return (
    <nav className={`navbar  bg-body-tertiary  ${style.nav} `}>
      {/* FIRST SECTION */}

      {/* ICONS */}
      {/* TODO change the redirect URL of the icons */}
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
          <Link className={`navbar-brand ${style.logo}`} href='/'>
            <Image src={logo} alt='guermar logo' width={200} height={50} />
          </Link>
        </div>

        <div>
          {/* SIDE NAVBAR MENU */}
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
                      className={'nav-link '}
                      aria-current='page'
                      href={'/'}
                    >
                      <Li className={'nav-item'}>
                        <h4 onClick={closeSideNavbar}>Inicio</h4>
                      </Li>
                    </Link>

                    <Link
                      className={'nav-link'}
                      aria-current='page'
                      href={'/productos'}
                    >
                      <Li className={'nav-item'}>
                        <h4 onClick={closeSideNavbar}> Productos</h4>
                      </Li>
                    </Link>

                    <Link
                      className={'nav-link'}
                      aria-current='page'
                      href='/servicios'
                    >
                      <Li className={'nav-item'}>
                        <h4 onClick={closeSideNavbar}> Servicios</h4>
                      </Li>
                    </Link>
                    <Link
                      className={'nav-link'}
                      aria-current='page'
                      href='/contacto'
                    >
                      <Li className={'nav-item'}>
                        <h4 onClick={closeSideNavbar}>Contacto</h4>
                      </Li>
                    </Link>
                    <Link
                      className={'nav-link'}
                      aria-current='page'
                      href='/quienes-somos'
                    >
                      <Li className={'nav-item'}>
                        <h4 onClick={closeSideNavbar}>Quienes Somos</h4>
                      </Li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION DIVIDER */}
      <div className={style.sectionDivider} />

      {/* PRINCIPAL NAVBAR  */}
      <div className={`${style.secondSection}`} id='navbarNav'>
        <ul className='navbar-nav '>
          <Link
            className={`nav-link ${pathname == '/' && 'active'}`}
            aria-current='page'
            href='/'
          >
            <Li className='nav-item '>Inicio</Li>
          </Link>

          <Link
            className={`nav-link ${pathname == '/productos' && 'active'}`}
            href='/productos'
          >
            <Li className='nav-item'>Productos</Li>
          </Link>

          <Link
            className={`nav-link ${pathname == '/servicios' && 'active'}`}
            href='servicios'
          >
            <Li className='nav-item'>Servicios</Li>
          </Link>

          <Link
            className={`nav-link ${pathname == '/contacto' && 'active'}`}
            href='/contacto'
          >
            <Li className='nav-item'>Contacto</Li>
          </Link>

          <Link
            className={`nav-link ${pathname == '/quienes-somos' && 'active'}`}
            href='/quienes-somos'
          >
            <Li className='nav-item'>Quienes somos</Li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
