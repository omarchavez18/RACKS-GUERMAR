// @refresh reset

import style from './aboutUs.module.scss'
import Image from 'next/image'
import quienesSomos1 from '@/../public/images/aboutUs/quienesSomos1.jpg'

function AboutUs() {
  return (
    <div className={style.container}>
      <div className={style.titleAndImgContainer}>
        <section className={style.titleContainer}>
          <section>
            <h2 data-aos='fade-up'>Sobre Nosotros</h2>

            <p data-aos='fade-up' data-aos-delay='400'>
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
            <Image
              data-aos='fade-down'
              src={quienesSomos1}
              alt='guermar'
              fill={true}
            />
          </div>
        </section>
      </div>

      <div className={style.historyContainer}>
        <div className={style.historyImageContainer}>
          <Image
            data-aos='fade-right'
            className={style.historyImg}
            src={quienesSomos1}
            alt='guermar'
            fill={true}
          />
        </div>

        <section className={style.historyTitle}>
          <h3 data-aos='fade-left'>Nuestra historia</h3>
          <p data-aos='fade-left' data-aos-delay='200'>
            {' '}
            Marzo 1987 - León, Guanajuato.
          </p>
        </section>
      </div>

      <div className={style.historyContent}>
        <p
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='1000'
        >
          Muebles Guer-Mar, una empresa leonesa con raíces profundas y una
          historia que ha evolucionado con el tiempo. A pesar de que León era
          reconocida principalmente por la fabricación de calzado, el Sr.
          Alberto Guerra y su hijo Juan José Guerra Chávez desafiaron las normas
          al establecer la única fundidora en la región. Esta fundidora jugó un
          papel crucial en la creación de bancas que decoran el centro histórico
          de León y otras ciudades circunvecinas. Posteriormente, el Sr. Juan
          José Guerra se enfocó en la fabricación de herramientas para la
          perforación de pozos. Sin embargo, cuando su hijo, Juan José Guerra
          Bustamante, se unió a la empresa familiar, decidieron diversificarse.
          Comenzaron fabricando comederos para animales, pero pronto
          identificaron una creciente necesidad en el mercado local: mobiliario
          para exhibición y almacenaje en los comercios emergentes de la ciudad
          de León.
          <br />
          <br />
          En 1966, formalizaron su compromiso con la fabricación de muebles
          metálicos y fundaron la empresa Muebles Metálicos GUER-MAR,
          nombrándola en honor a las primeras letras de los apellidos Guerra y
          Martínez, este último siendo el apellido de la esposa de Juan José,
          Luz Rebeca. Desde entonces, Don Juan José y Luz Rebeca han liderado la
          empresa. A lo largo de los años, los 8 hijos del matrimonio han
          contribuido al negocio en diferentes momentos, y en la actualidad, la
          administración está en manos de Lorena, la hija menor, quien continúa
          llevando adelante la visión y el legado de la familia. Muebles
          Guer-Mar es más que una empresa; es un testimonio de la tenacidad, la
          evolución y el compromiso de una familia con la excelencia y la
          innovación en León
        </p>
      </div>

      <hr />

      <div className={style.companyGeneralValuesContainer}>
        <div className={style.companyValuesContainer}>
          <section className={style.valuesText}>
            <h3 data-aos='fade-down' data-aos-easing='linear'>
              MISIÓN
            </h3>
            <hr />
            <p
              data-aos='fade-down'
              data-aos-easing='linear'
              data-aos-delay='200'
            >
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
            <h3 data-aos='fade-left' data-aos-easing='linear'>
              VISIÓN
            </h3>
            <hr />
            <p
              data-aos='fade-left'
              data-aos-easing='linear'
              data-aos-delay='200'
            >
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
            <h3 data-aos='fade-up' data-aos-easing='linear'>
              VALORES
            </h3>
            <hr />
            <p data-aos='fade-up' data-aos-easing='linear' data-aos-delay='200'>
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
