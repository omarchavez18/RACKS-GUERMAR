//@refresh reset
import Image from 'next/image'
import style from './gallery.module.scss'
import Link from 'next/link'

import image1 from '../../../public/images/gallery/1.webp'
import image2 from '../../../public/images/gallery/2.webp'
import image3 from '../../../public/images/gallery/3.webp'
import image4 from '../../../public/images/gallery/4.webp'
import image5 from '../../../public/images/gallery/5.webp'
import image6 from '../../../public/images/gallery/6.webp'
import classNames from '@/helpers'

function Gallery() {
  return (
    <>
      <div className={style.title}>
        <h2>PRODUCTOS PRINCIPALES</h2>
      </div>

      <section className={style.container}>
        <div className={classNames(style.image1, style.image)}>
          <Image src={image1} alt='image1' fill />
          <Link href={'/productos'}>
            <section className={style.btnPop}>ver Producto</section>
          </Link>
        </div>

        <div className={classNames(style.image2, style.image)}>
          <Image src={image2} alt='image2' fill />
          <Link href={'/productos'}>
            <section className={style.btnPop}>ver Producto</section>
          </Link>
        </div>

        <div className={classNames(style.image3, style.image)}>
          <Image src={image3} alt='image3' fill />
          <Link href={'/productos'}>
            <section className={style.btnPop}>ver Producto</section>
          </Link>
        </div>

        <div className={classNames(style.image4, style.image)}>
          <Image src={image4} alt='image4' fill />
          <Link href={'/productos'}>
            <section className={style.btnPop}>ver Producto</section>
          </Link>
        </div>

        <div className={classNames(style.image5, style.image)}>
          <Image src={image5} alt='image5' fill />
          <Link href={'/productos'}>
            <section className={style.btnPop}>ver Producto</section>
          </Link>
        </div>

        <div className={classNames(style.image6, style.image)}>
          <Image src={image6} alt='image6' fill />
          <Link href={'/productos'}>
            <section className={style.btnPop}>ver Producto</section>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Gallery
