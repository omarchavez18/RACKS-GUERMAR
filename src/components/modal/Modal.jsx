import style from './modal.module.scss'
import Image from 'next/image'
import whale from '@/../public/images/aboutUs/ballena.jpg'
import shark from '@/../public/images/contact/shark.jpg'
import scubadiver from '@/../public/images/gallery/2.webp'
import Link from 'next/link'

function Modal({ title, modalText, modalVisibleState }) {
  return (
    <div
      className={`${style.container} modal fade modal-xl`}
      id='staticBackdrop'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      tabIndex='-1'
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className={`${style.modalContent} modal-content`}>
          <div className={`${style.header} modal-header`}>
            <h1 className='modal-title fs-5' id='staticBackdropLabel'>
              {title}
            </h1>
            <button
              className={`${style.btnClose} btn-close`}
              type='button'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={modalVisibleState}
            />
          </div>

          <div className={`${style.body} modal-body`}>
            <section className={`${style.imgContainer}`}>
              {/* carousel */}
              <div
                id='carouselExampleFade'
                className={`${style.carouselContainer} carousel slide carousel-fade`}
              >
                <div className={`${style.innerContainer} carousel-inner`}>
                  <div className={`${style.element} carousel-item active`}>
                    <div style={{ width: '100%' }}>
                      <Image
                        src={shark}
                        className='d-block w-100'
                        alt='...'
                        fill
                      />
                    </div>
                  </div>
                  <div className={`${style.element} carousel-item `}>
                    <div style={{ width: '100%' }}>
                      <Image
                        src={whale}
                        className='d-block w-100'
                        alt='...'
                        fill
                      />
                    </div>
                  </div>
                  <div className={`${style.element} carousel-item `}>
                    <div style={{ width: '100%' }}>
                      <Image
                        src={scubadiver}
                        className='d-block w-100'
                        alt='...'
                        fill
                      />
                    </div>
                  </div>
                </div>
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target='#carouselExampleFade'
                  data-bs-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleFade'
                  data-bs-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
            </section>

            <div className={`${style.textContainer}`}>
              <p>{modalText}</p>
            </div>
          </div>
          <div className={`${style.footer} modal-footer`}>
            <Link href={'/contacto#contacto'}>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Cotizar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
