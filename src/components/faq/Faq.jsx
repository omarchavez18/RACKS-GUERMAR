import style from './faq.module.scss'
import TitleSeparator from '../titleSeparator/TitleSeparator'

const Faq = () => {
  return (
    <div className={style.container}>
      <TitleSeparator title='PREGUNTAS FRECUENTES' />
      <h5
        data-aos='zoom-in-up'
        data-aos-delay='1000'
        className={style.subtitle}
      >
        ¡Lo que todo cliente quiere saber!
      </h5>
      <hr />

      <div
        data-aos='fade-down'
        data-aos-easing='linear'
        data-aos-delay='200'
        className={`${style.questionsContainer} accordion`}
        id='accordionExample'
      >
        <div className={`${style.accordionItem} accordion-item`}>
          <h2 className='accordion-header'>
            <button
              className={`accordion-button ${style.accordionButton}`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              ¿Los Racks son fabricados a la medida?
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            data-bs-parent='#accordionExample'
          >
            <div className={`${style.accordionBody} accordion-body`}>
              Sí, todos nuestros productos son fabricados acorde a las
              necesidades de cada cliente.
            </div>
          </div>
        </div>

        <div className={`${style.accordionItem} accordion-item`}>
          <h2 className='accordion-header'>
            <button
              className={`accordion-button collapsed ${style.accordionButton}`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              ¿La visita para consultoría tiene costo?
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className={`${style.accordionBody} accordion-body`}>
              No, las visitas son totalmente gratis dentro del estado de
              Guanajuato.
            </div>
          </div>
        </div>

        <div className={`${style.accordionItem} accordion-item`}>
          <h2 className='accordion-header'>
            <button
              className={`accordion-button collapsed ${style.accordionButton}`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              ¿Venden accesorios por separado?
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className={`${style.accordionBody} accordion-body`}>
              Si, contamos con una amplia gama de refacciones y accesorios como:
              parrillas, botas protectoras, entre muchos más.
            </div>
          </div>
        </div>

        <div className={`${style.accordionItem} accordion-item`}>
          <h2 className='accordion-header'>
            <button
              className={`accordion-button collapsed ${style.accordionButton}`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFour'
              aria-expanded='false'
              aria-controls='collapseFour'
            >
              ¿Cómo determinar si necesito un sistema de estantería metálica
              para un espacio comercial o industrial?
            </button>
          </h2>
          <div
            id='collapseFour'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className={`${style.accordionBody} accordion-body`}>
              Para un espacio comercial los productos a utilizar son Anaquel sin
              tornillos, Anaquel tipo AP, Estanería con tornillos ya que la
              carga de producto a almacenar es ligera y para un espacio
              industrial mayormente se utiliza Rack Selectivo, Rack Picking y
              Mezzanine porque la carga supera los 300 kg por nivel.
            </div>
          </div>
        </div>

        <div className={`${style.accordionItem} accordion-item`}>
          <h2 className='accordion-header'>
            <button
              className={`accordion-button collapsed ${style.accordionButton}`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFive'
              aria-expanded='false'
              aria-controls='collapseFive'
            >
              ¿Qué tipo de materiales emplean para el nivel de los rack?
            </button>
          </h2>
          <div
            id='collapseFive'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className={`${style.accordionBody} accordion-body`}>
              Los niveles de los racks se adaptan a cada necesidad específica
              pueden varias desde madera, melamina, nivel metálico tipo monten,
              nivel metálico liso tipo entrepaño, soportes para tarima, parrilla
              metálica, entre otras elecciones para nuestros clientes.
            </div>
          </div>
        </div>

        <div className={`${style.accordionItem} accordion-item`}>
          <h2 className='accordion-header'>
            <button
              className={`accordion-button collapsed ${style.accordionButton}`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseSix'
              aria-expanded='false'
              aria-controls='collapseSix'
            >
              ¿Realizan instalación?
            </button>
          </h2>
          <div
            id='collapseSix'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className={`${style.accordionBody} accordion-body`}>
              Sí, incluímos el armado de tu equipo.
            </div>
          </div>
        </div>
        <div className={`${style.accordionItem} accordion-item`}>
          <h2 className='accordion-header'>
            <button
              className={`accordion-button collapsed ${style.accordionButton}`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseSeven'
              aria-expanded='false'
              aria-controls='collapseSeven'
            >
              ¿Hay envíos a toda la República mexicana?
            </button>
          </h2>
          <div
            id='collapseSeven'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className={`${style.accordionBody} accordion-body`}>
              Sí, realizamos el envío y armado en tu bodega o almacén.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
