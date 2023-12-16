'use client'
import style from './multiCarousel.module.scss'
import Card from '../card/Card'
import React, { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import whale from '@/../public/images/aboutUs/ballena.jpg'
import shark from '@/../public/images/contact/shark.jpg'
import scubadiver from '@/../public/images/gallery/2.webp'
import Modal from '../modal/Modal'

const MultiCarousel = () => {
  const [modalTitle, setModalTitle] = useState('')
  const [modalText, setModalText] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  function changeModalVisiblity() {
    setModalVisible(false)
  }

  modalVisible
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto')

  let titles = [
    'Mesas de trabajo',
    'Escaleras industriales',
    'Cajones hormeros y pico de pato',
    'Elevadores industriales',
    'Gabinete universal',
  ]

  let bodyText = [
    'Nuestras mesas de trabajo se destacan como un componente esencial para cualquier negocio. Fabricadas con materiales de alta resistencia, aseguramos que estas mesas perduren a lo largo del tiempo. La elección de la cubierta, ya sea metálica, de melamina o triplay, se adapta a la perfección a las demandas específicas de uso y a las necesidades particulares de cada situación. Confía en la durabilidad de nuestras mesas de trabajo, diseñadas para ser una inversión sólida para tu negocio.',
    'Nuestras escaleras industriales representan una solución segura y eficiente para el manejo de productos a alturas de hasta 3 metros. Dotadas de una plataforma de trabajo sólida y barandales resistentes, estas escaleras proporcionan un entorno seguro para tu personal, generando confianza al manipular productos en alturas moderadas. La adaptabilidad es clave, y nuestras escaleras industriales se fabrican a medida para cada área específica, garantizando que el flujo de mercancía fluya sin interrupciones debido a malos manejos. Esta medida proactiva no solo previene accidentes, sino que también salvaguarda la integridad de la mercancía, ofreciendo una solución completa y efectiva para tus necesidades en alturas controladas.',
    'Nuestros cajones horneros y de pico de pato representan una solución excepcional para almacenar productos sueltos o a granel, ofreciendo una alternativa eficiente para mantener tu espacio organizado sin la necesidad de un mueble o rack adicional. Además, el diseño de nuestros cajones facilita una visión clara de los productos almacenados, permitiéndote mantener un control preciso de tus inventarios. La practicidad de estos cajones se refleja en sus tres tamaños, diseñados para adaptarse fácilmente a diversas situaciones y espacios. Su capacidad para ser estibados verticalmente añade una capa adicional de organización, proporcionándote la seguridad de que tu mercancía está cuidadosamente ordenada. Simplifica tu gestión de inventarios y optimiza tu espacio con nuestros cajones horneros y de pico de pato, dependiendo tus necesidades los cajones pico de pato se ofrecen en tamaño chico y grande y el hormero solo en tamaño grande.',
    'Los elevadores industriales se presentan como la solución ideal para la gestión eficiente de mercancía en espacios de doble o triple altura. Es la elección acertada en entornos donde los operadores manipulan manualmente la carga, ya que estos elevadores brindan una alternativa segura. Facilitan el manejo de la mercancía, asegurando la seguridad tanto de los operadores como de la carga misma, reduciendo así los riesgos de accidentes asociados al uso de escaleras. Eleva la eficacia y la seguridad en tu entorno industrial con nuestra gama de elevadores.',
    'Nuestro Gabinete Universal se presenta como la elección óptima para aquellos entornos que demandan almacenamiento seguro. Perfecto para oficinas y pequeños almacenes, este gabinete ofrece un espacio cerrado esencial. Asegura la protección de objetos delicados o de valor que requieren un manejo especial. Nuestro gabinete se destaca al permitir su aseguramiento mediante llave o candado, proporcionando una capa adicional de seguridad. Robusto y resistente, garantiza la integridad de tus productos almacenados, proporcionando tranquilidad y confianza en la gestión de tus pertenencias.',
  ]

  function changeModalInfo(id) {
    setModalTitle(titles[id])
    setModalText(bodyText[id])
    setModalVisible(true)
  }

  return (
    <>
      <Modal
        modalVisibleState={changeModalVisiblity}
        title={modalTitle}
        modalText={modalText}
      />

      <Swiper
        className={`${style.swiper} mySwiper`}
        slidesPerView={4}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide className={style.swiperSlide}>
          <Card
            click={() => {
              changeModalInfo(0)
            }}
            image={shark}
            imageAlt='mesas de trabajo'
            title='Mesas de trabajo'
            subtitle='Fabricadas con materiales de alta resistencia'
            buttonText='ver Mesas de trabajo'
          />
        </SwiperSlide>

        <SwiperSlide className={style.swiperSlide}>
          <Card
            click={() => {
              changeModalInfo(1)
            }}
            image={whale}
            imageAlt='escaleras industriales'
            title='Escaleras Industriales'
            subtitle='Fabricadas a la medida de tus necesidades'
            buttonText='ver escaleras'
          />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Card
            click={() => {
              changeModalInfo(2)
            }}
            image={scubadiver}
            imageAlt='cajones hormeros'
            title='Cajones hormeros y pico de pato'
            subtitle='solución para almacenar productos sueltos o a granel'
            buttonText='ver cajones'
          />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Card
            click={() => {
              changeModalInfo(3)
            }}
            image={shark}
            imageAlt='elevadores industriales'
            title='Elevadores Industriales'
            subtitle='solución para mercancia en espacios de doble o triple altura'
            buttonText='ver elevadores'
          />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlide}>
          <Card
            click={() => {
              changeModalInfo(4)
            }}
            image={scubadiver}
            imageAlt='gabinete'
            title='Gabinete Universal'
            subtitle='solución ideal para almacenamiento seguro'
            buttonText='ver gabinetes'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default MultiCarousel
