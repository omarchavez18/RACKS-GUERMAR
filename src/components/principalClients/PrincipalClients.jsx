'use client'
//@refresh reset
import Image from 'next/image'
import style from './principalClients.module.scss'
import ade from '@/../public/images/clients/ADE100.webp'
import bader from '@/../public/images/clients/bader.webp'
import bruken from '@/../public/images/clients/bruken.webp'
import elektron from '@/../public/images/clients/elektron.webp'
import kia from '@/../public/images/clients/kia.webp'
import laSalle from '@/../public/images/clients/lasalle.webp'
import noblemaq from '@/../public/images/clients/noblemaq-de-mexico.webp'
import serviacero from '@/../public/images/clients/serviacero.webp'
import volkswagen from '@/../public/images/clients/volkswagen.webp'
import jureka from '@/../public/images/clients/jureka.webp'
import miretech from '@/../public/images/clients/miretech.webp'
import ykk from '@/../public/images/clients/YKK.webp'
import logo from '@/../public/images/logo/rackLogo.webp'

const PrincipalClients = () => {
  const clients = [
    ade,
    bader,
    bruken,
    elektron,
    kia,
    laSalle,
    noblemaq,
    serviacero,
    volkswagen,
    ykk,
    jureka,
    miretech,
  ]
  return (
    <div className={style.container}>
      <div className={style.title}>
        <Image
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='1000'
          src={logo}
          alt='logo'
        />

        <h2
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='1000'
        >
          Nuestros Clientes
        </h2>

        <p
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='1000'
        >
          Conozca algunos de nuestros clientes satisfechos
        </p>
      </div>
      {/*  */}
      <section className={style.imagesSection}>
        {clients.map((client, i) => {
          return (
            <div
              data-aos='fade-down'
              data-aos-easing='linear'
              data-aos-duration='1000'
              className={style.imageContainer}
              key={i}
            >
              <Image src={client} alt='' fill={true} />
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default PrincipalClients
