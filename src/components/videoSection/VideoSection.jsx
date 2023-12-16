import style from './videoSection.module.scss'
import Button from '../button/Button'
import buttonStyle from '../button/button.module.scss'
import Link from 'next/link'

function VideoSection({ video, title, subtitle }) {
  return (
    <div className={style.container}>
      <section className={style.videoArea}>
        <video autoPlay muted loop src={video} />
        <div className={style.titleAndBtn}>
          <section className={style.bar}></section>
          <h2>{title}</h2>
          <hr />
          <p>{subtitle}</p>

          <Link href={'/contacto'}>
            <Button className={buttonStyle.btn}>{`contactanos >`} </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default VideoSection
