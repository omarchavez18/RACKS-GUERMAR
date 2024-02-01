//@refresh reset
import Image from 'next/image'
import style from './gallery.module.scss'
import Link from 'next/link'
import TitleSeparator from '../titleSeparator/TitleSeparator'
import rackCarga3 from '@/../public/images/products/rackSelectivo/rackCarga3.jpg'
import mezzanine1 from '@/../public/images/products/mezzanine/mezzanine1.jpg'
import anaquel1 from '@/../public/images/products/anaquel/anaquelSinTornilloAp.jpeg'
import rackPicking2 from '@/../public/images/products/rackPicking/rackPicking2.jpg'
import estanteriaConTornillo1 from '@/../public/images/products/estanterias/estanteriaConTornillo.jpg'
import mesa1 from '@/../public/images/products/mesas/mesa1.jpg'
import classNames from '@/helpers'

function Gallery() {
  return (
    <>
      <TitleSeparator title={'PRODUCTOS PRINCIPALES'} />
      <section
        data-aos='fade-right'
        data-aos-offset='300'
        data-aos-easing='ease-in-quad'
        className={style.container}
      >
        <div
          data-aos-anchor-placement='center-center'
          className={classNames(style.image1, style.image)}
        >
          <Image src={rackCarga3} alt='rack selectivo' fill />
          <Link href={'/productos#rackSelectivo'}>
            <section className={style.btnPop}>
              <p>RACK SELECTIVO</p>
            </section>
          </Link>
        </div>

        <div className={classNames(style.image2, style.image)}>
          <Image src={rackPicking2} alt='image2' fill />
          <Link href={'/productos#rackPicking'}>
            <section className={style.btnPop}>RACK PICKING</section>
          </Link>
        </div>

        <div className={classNames(style.image3, style.image)}>
          <Image src={anaquel1} alt='image3' fill />
          <Link href={'/productos#anaquel'}>
            <section className={style.btnPop}>
              <p>ANAQUELES</p>
            </section>
          </Link>
        </div>

        <div className={classNames(style.image4, style.image)}>
          <Image src={mezzanine1} alt='image4' fill />
          <Link href={'/productos#mezzanine'}>
            <section className={style.btnPop}>MEZZANINE</section>
          </Link>
        </div>

        <div className={classNames(style.image5, style.image)}>
          <Image src={estanteriaConTornillo1} alt='image5' fill />
          <Link href={'/productos#estanterias'}>
            <section className={style.btnPop}>ESTANTERIA CON TORNILLOS</section>
          </Link>
        </div>

        <div className={classNames(style.image6, style.image)}>
          <Image src={mesa1} alt='image6' fill />
          <Link href={'/productos#otrosProductos'}>
            <section className={style.btnPop}>OTROS PRODUCTOS</section>
          </Link>
        </div>
      </section>
      <div className={style.bottomSeparator}></div>
    </>
  )
}

export default Gallery
