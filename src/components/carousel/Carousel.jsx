// @refresh reset
import Image from 'next/image'
import style from './carousel.module.scss'
const Carousel = ({ firstImage, images, carouselId }) => {
  return (
    <div
      id={carouselId}
      className={`${style.carouselContainer} carousel slide carousel-fade`}
    >
      <div className={`${style.innerContainer} carousel-inner`}>
        <div className={`${style.element} carousel-item active`}>
          <div className={style.imagesContainer}>
            <Image src={firstImage} className='d-block w-100' alt='...' fill />
          </div>
        </div>

        {images.map((image, i) => {
          return (
            <div key={i} className={`${style.element} carousel-item `}>
              <div className={style.imagesContainer}>
                <Image
                  src={image.image}
                  className='d-block w-100'
                  alt={image.alt}
                  fill
                />
              </div>
            </div>
          )
        })}
      </div>

      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target={`#${carouselId}`}
        data-bs-slide='prev'
      >
        <span
          className={`${style.arrow} carousel-control-prev-icon`}
          aria-hidden='true'
        ></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target={`#${carouselId}`}
        data-bs-slide='next'
      >
        <span
          className={`${style.arrow} carousel-control-next-icon`}
          aria-hidden='true'
        ></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}

export default Carousel
