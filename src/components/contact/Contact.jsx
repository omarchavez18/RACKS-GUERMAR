import Image from 'next/image'
import Button from '../button/Button'
import titleStyle from '@/components/gallery/gallery.module.scss'
import subtitleStyle from '@/components/principalClients/principalClients.module.scss'
import logo from '@/../public/images/logo/rackLogo.webp'
import telephoneIcon from '@/../public/animatedIcons/telephone.svg'
import whatsappColorIcon from '@/../src/../public/icons/colorWhatsappIcon.svg'
import locationIcon from '@/../public/icons/pinLocation.svg'
import mailIcon from '@/../public/icons/mail.svg'
import shark from '@/../public/images/contact/shark.jpg'
import style from './contact.module.scss'
import facebook from '@/../public/icons/colorFacebookIcon.svg'
import instagram from '@/../public/icons/colorInstagramIcon.svg'
import classNames from '@/helpers'
import TitleSeparator from '../titleSeparator/TitleSeparator'

function Contacto() {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image src={shark} alt='contact' fill />
      </div>

      <TitleSeparator title={'CONTACTO'} />

      <div className={subtitleStyle.title}>
        <Image src={logo} alt='logo' />
        <h2>¿Tienes preguntas?</h2>
        <p>Con gusto te ayudaremos a resolverlas, ¡Contactanos!</p>
      </div>

      {/*  */}
      <section className={style.mapAndIconsContainer}>
        <div className={style.mapContainer}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5885.663532297284!2d-101.5805715681646!3d21.057273274310255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b963693d59459%3A0x11cb9af22e71bd96!2sGuermar%20Muebles%20Met%C3%A1licos%20S.A.%20de%20C.V.!5e1!3m2!1ses!2smx!4v1700361372386!5m2!1ses!2smx'
            width='600'
            height='450'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>

        <div className={style.textAndIcons}>
          <div className={style.sectionsContainer}>
            <section>
              <h6>
                Llamanos para atenderte de inmediato o mandanós un WhatsApp.
              </h6>
              <Button className={style.btn}>
                <a href='tel:+524777142209' target='_blank'>
                  <Image
                    src={telephoneIcon}
                    alt='telephone'
                    width={50}
                    height={50}
                  />
                  <p>477-714-2209</p>
                </a>
              </Button>

              <Button className={style.btn}>
                <a
                  href='https://api.whatsapp.com/send?phone=+524771764248&text= Hola! buen dia, me gustaria realizar una cotizacion.'
                  target='_blank'
                >
                  <Image
                    src={whatsappColorIcon}
                    alt='whatsapp'
                    width={50}
                    height={50}
                  />
                  <p>477-176-4248</p>
                </a>
              </Button>
            </section>

            <section>
              <h6>
                Envíanos un email preguntando por el rack o servicio que deseas
                adquirir.
              </h6>

              <Button className={classNames(style.btn, style.emailBtn)}>
                <a
                  href='mailto:ventas_guermar@hotmail.com?subject=Mail de nuestro sitio web&body=Hola buen día, me gustaria recibir más información sobre...'
                  target='_blank'
                >
                  <Image src={mailIcon} alt='email' width={50} height={50} />
                  <p>ventas_guermar@hotmail.com</p>
                </a>
              </Button>
            </section>
          </div>

          <div className={style.locationContainer}>
            <a href='https://maps.app.goo.gl/z1VshKCwMh4SCTwS6' target='_blank'>
              <Image src={locationIcon} alt='whatsapp' width={50} height={50} />

              <p>Torre de Ardoz 233, Arboledas del Campo, 37544 León, Gto.</p>
              <hr />

              <p>
                Horario de atención: <br />
                Lunes a Viernes de 9:00 am a 18:00pm.
              </p>
            </a>
          </div>
        </div>
      </section>

      <hr className={style.hr} />

      <div className={style.social}>
        <h2>Siguenos en nuestras redes sociales.</h2>
        <section className={style.socialIcons}>
          <a href={'https://www.facebook.com/Guermarmuebles'} target='_blank'>
            <Image src={facebook} alt='facebook' width={50} height={50} />
          </a>

          <a
            href={'https://www.instagram.com/guermar.fabricanterack/'}
            target='_blank'
          >
            <Image src={instagram} alt='instagram' width={50} height={50} />
          </a>
        </section>
      </div>
    </div>
  )
}

export default Contacto

//
