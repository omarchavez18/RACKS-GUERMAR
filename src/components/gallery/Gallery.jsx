//@refresh reset
import Image from 'next/image'
import style from './gallery.module.scss'
import TitleSeparator from '../titleSeparator/TitleSeparator'
import rackCarga3 from '@/../public/images/products/rackSelectivo/rackCarga3.jpg'
import mezzanine1 from '@/../public/images/products/mezzanine/mezzanine2.jpg'
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
          <Image src={rackCarga3} alt='rack selectivo' fill={true} />
          <a href={'/productos#rackSelectivo'}>
            <section className={style.btnPop}>
              <p className={style.rackSTexto}>RACK SELECTIVO</p>
            </section>
          </a>
        </div>

        <div className={classNames(style.image2, style.image)}>
          <Image src={rackPicking2} alt='image2' fill={true} />
          <a href={'/productos#rackPicking'}>
            <section className={style.btnPop}>
              <p className={style.rackSTexto}>RACK PICKING</p>
            </section>
          </a>
        </div>

        <div className={classNames(style.image3, style.image)}>
          <Image src={anaquel1} alt='image3' fill={true} />
          <a href={'/productos#anaquel'}>
            <section className={style.btnPop}>
              <p>ANAQUELES</p>
            </section>
          </a>
        </div>

        <div className={classNames(style.image4, style.image)}>
          <Image src={mezzanine1} alt='image4' fill={true} />
          <a href={'/productos#mezzanine'}>
            <section className={style.btnPop}>
              <p>MEZZANINE</p>
            </section>
          </a>
        </div>

        <div className={classNames(style.image5, style.image)}>
          <Image src={estanteriaConTornillo1} alt='image5' fill={true} />
          <a href={'/productos#estanterias'}>
            <section className={style.btnPop}>
              <p>ESTANTERIA CON TORNILLOS</p>
            </section>
          </a>
        </div>

        <div className={classNames(style.image6, style.image)}>
          <Image src={mesa1} alt='image6' fill={true} />
          <a href={'/productos#otrosProductos'}>
            <section className={style.btnPop}>
              <p>OTROS PRODUCTOS</p>
            </section>
          </a>
        </div>
      </section>
      <div className={style.bottomSeparator}></div>
    </>
  )
}

export default Gallery
