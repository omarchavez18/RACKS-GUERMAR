'use client'
// @refresh reset
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import style from './modal.module.scss'
import Link from 'next/link'

function Modal({ title, modalText, modalVisibleState, images }) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  function handleCloseCarousel() {
    setIndex(0)
  }

  function closeButton() {
    return modalVisibleState, handleCloseCarousel()
  }

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
              onClick={closeButton}
            />
          </div>

          <div className={`${style.body} modal-body`}>
            <section className={`${style.imgContainer}`}>
              <Carousel
                fade
                interval={null}
                activeIndex={index}
                onSelect={handleSelect}
                className={style.carousel}
              >
                {images.map((image, i) => {
                  return (
                    <Carousel.Item className='h-100' key={i}>
                      <Image
                        className='d-block w-100 h-100 object-fit-contain'
                        src={image.image}
                        alt={image.alt}
                      />
                    </Carousel.Item>
                  )
                })}
              </Carousel>
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
