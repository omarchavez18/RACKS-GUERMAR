// @refresh reset
import Image from 'next/image'
import Link from 'next/link'
import style from './footer.module.scss'
import logo from '@/../public/images/logo/logo.webp'
import instagramColorIcon from '@/../src/../public/icons/colorInstagramIcon.svg'
import whatsappColorIcon from '@/../src/../public/icons/colorWhatsappIcon.svg'
import facebookColorIcon from '@/../src/../public/icons/colorFacebookIcon.svg'
import locationIcon from '@/../public/animatedIcons/location.webp'
import telephoneIcon from '@/../public/animatedIcons/telephone.svg'
import clockIcon from '@/../public/animatedIcons/clock.webp'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <hr />
      <div className={style.firstSection}>
        <div className={style.logoSection}>
          <Link href={'/'}>
            <Image className={style.logo} src={logo} alt='logo' />
          </Link>

          <section className={style.social}>
            <a
              href={'https://www.instagram.com/racks.guermar/'}
              target='_blank'
            >
              <Image
                src={instagramColorIcon}
                alt='instagram icon'
                height={20}
                width={20}
              />
            </a>
            <a
              href={
                'https://api.whatsapp.com/send?phone=+524771764248&text= Hola! buen dia, me gustaria realizar una cotizacion.'
              }
              target='_blank'
            >
              <Image
                src={whatsappColorIcon}
                alt='whatsapp icon'
                height={20}
                width={20}
              />
            </a>
            <a href={'https://www.facebook.com/Guermaracks'} target='_blank'>
              <Image
                src={facebookColorIcon}
                alt='facebook icon'
                height={20}
                width={20}
              />
            </a>
          </section>
        </div>

        <section className={style.animates}>
          <div>
            <Image src={locationIcon} alt='location' width={50} height={50} />
            <a href='https://maps.app.goo.gl/z1VshKCwMh4SCTwS6' target='_blank'>
              <p>Torre de Ardoz 233, Arboledas del Campo, 37544 León, Gto.</p>
            </a>
          </div>
          <div>
            <Image
              className={style.telephone}
              src={telephoneIcon}
              alt='telephone'
              width={50}
              height={50}
            />
            <a href='tel:+524777142209'>
              <p>
                Nuestro telefono de atención: <br /> 477-714-2209.
              </p>
            </a>
          </div>
          <div>
            <Image src={clockIcon} alt='clock' width={50} height={50} />
            <p>
              Horario de atención: <br /> Lunes - Viernes de 9:00 am - 18:00 pm.
            </p>
          </div>
        </section>
      </div>
      <section className={style.secondSection}></section>

      <section className={style.thirdSection}>
        <p>
          Todos los derechos reservados. Desarrollado por:{' '}
          <a href='https://www.linkedin.com/in/omarchavezgdv/' target='_blank'>
            @omarchavezGDV
          </a>
        </p>
      </section>
    </footer>
  )
}

export default Footer
