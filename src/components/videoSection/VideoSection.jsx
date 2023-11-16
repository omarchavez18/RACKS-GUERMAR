import style from './videoSection.module.scss'
import Button from '../button/Button'
import buttonStyle from '../button/button.module.scss'
import Link from 'next/link'

function VideoSection() {
  return (
    <div className={style.container}>
      <section className={style.videoArea}>
        <video autoPlay muted loop src='./video/surfVideo.mp4' />
        <div className={style.titleAndBtn}>
          <section className={style.bar}></section>
          <h2>GUERMAR MUEBLES METALICOS</h2>
          <hr />
          <p>Soluciones para todo tipo de necesidades</p>

          <Link href={'/contacto'}>
            <Button className={buttonStyle.btn}>{`contactanos >`} </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default VideoSection
