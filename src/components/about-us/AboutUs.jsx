// @refresh reset

import style from './aboutUs.module.scss'
import Image from 'next/image'
import ballena from '@/../public/images/aboutUs/ballena.jpg'

function AboutUs() {
  return (
    <div className={style.container}>
      <div className={style.titleAndImgContainer}>
        <section className={style.titleContainer}>
          <section>
            <h2>Sobre Nosotros</h2>

            <p>
              {' '}
              En Guermar empresa 100% mexicana, somos fabricantes con
              experiencia de más de 30 años en soluciones de almacenamiento.
              Ofrecemos una amplia gama de racks y estanterías metálicas
              diseñadas para maximizar la eficiencia y el espacio en tu negocio.
              Nuestros productos son duraderos y versátiles, adaptándose a tus
              necesidades de almacenamiento. No importa si eres una pequeña
              empresa o una gran industria, estamos aquí para ayudarte a
              organizar y optimizar tu espacio de almacenamiento. ¡Descubre cómo
              podemos transformar tu logística y simplificar tus operaciones
              hoy!{' '}
            </p>
          </section>
        </section>

        <section className={style.imageContainer}>
          <div className={style.imageDiv}>
            <Image src={ballena} alt='ballena' fill />
          </div>
        </section>
      </div>

      <div className={style.historyContainer}>
        <div className={style.historyImageContainer}>
          <Image className={style.historyImg} src={ballena} alt='whale' fill />
        </div>

        <section className={style.historyTitle}>
          <h3>Nuestra historia</h3>
          <p> Marzo 1987 - León, Guanajuato.</p>
        </section>
      </div>

      <div className={style.historyContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          doloremque totam corrupti debitis unde voluptatem beatae voluptatum
          quas. Nisi sint deserunt sit nihil excepturi corrupti perspiciatis
          neque maiores natus dolorem? Ipsum nobis, sit ab eum rerum voluptates
          magnam natus quidem ex id non doloribus pariatur iusto, eius quasi
          inventore iste soluta ullam minima temporibus? Quisquam accusantium ad
          rerum id quis! Officiis nobis sapiente, atque ipsum animi perspiciatis
          illum aliquid impedit suscipit. Sed a debitis neque suscipit nam iure
          ipsam incidunt voluptatum saepe placeat, exercitationem enim fugit
          repudiandae et iste ducimus.
        </p>
      </div>

      <hr />

      <div className={style.companyGeneralValuesContainer}>
        <div className={style.companyValuesContainer}>
          <section className={style.valuesText}>
            <h3>MISIÓN</h3>
            <hr />
            <p>
              En GUERMAR, diseñamos, fabricamos y proporcionamos soluciones en
              almacenamiento de la más alta calidad para convertir el espacio
              vertical de nuestros clientes. Nos comprometemos a ofrecer
              productos innovadores, funcionales y duraderos que cumplan con las
              necesidades específicas de cada proyecto. A través de la
              excelencia en la fabricación y el servicio al cliente, buscamos
              ser el socio preferido para brindar soluciones metálicas en el
              almacenamiento.
            </p>
          </section>

          <section className={style.valuesContainerImg}></section>
        </div>

        <div className={style.companyValuesContainer}>
          <section className={style.valuesContainerImg}></section>
          <section className={style.valuesText}>
            <h3>VISIÓN</h3>
            <hr />
            <p>
              GUERMAR, busca ser líderes en la industria de fabricación de
              muebles metálicos para el almacenamiento, reconocidos por nuestra
              excelencia en diseño, calidad y servicio al cliente. Aspiramos a
              ser pioneros en la introducción de tecnologías innovadoras que
              mejoren la eficiencia y la versatilidad de nuestros proyectos.
              Buscamos expandir nuestra presencia a nivel nacional y global,
              estableciendo estándares de referencia para la industria y
              contribuyendo al éxito operativo de nuestros clientes en todo el
              mundo.
            </p>
          </section>
        </div>

        <div className={style.companyValuesContainer}>
          <section className={style.valuesText}>
            <h3>VALORES</h3>
            <hr />
            <p>
              Cooperación y trabajo en equipo, Confianza de nuestros clientes y
              de todos los que integramos la empresa, Servicio, Lealtad,
              Positivismo, Compromiso, Seguridad, Respeto, Honestidad.
            </p>
          </section>
          <section className={style.valuesContainerImg}></section>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
