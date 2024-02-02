'use client'
import style from './videoSection.module.scss'
import Button from '../button/Button'
import buttonStyle from '../button/button.module.scss'
import Link from 'next/link'

function VideoSection({ video, title, subtitle }) {
  return (
    <div
      data-aos='fade-up'
      data-aos-easing='linear'
      data-aos-duration='1000'
      className={style.container}
    >
      <section className={style.videoArea}>
        <video
          preload='none'
          autoPlay
          muted
          loop
          src={video}
          type='video/mp4'
          playsInline
        />
        <div className={style.titleAndBtn}>
          <section className={style.bar}></section>
          <h2 data-aos='fade-right' data-aos-delay='1000'>
            {title}
          </h2>
          <hr />
          <p data-aos='fade-left' data-aos-delay='1200'>
            {subtitle}
          </p>

          <Link href={'/contacto'}>
            <Button
              data-aos='fade-down'
              data-aos-delay='1400'
              id='videoSectionBtn'
              className={buttonStyle.btn}
            >
              {`contactanos >`}{' '}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default VideoSection
