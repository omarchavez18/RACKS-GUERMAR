import style from './videoSection.module.scss'

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
          <button>contactame</button>
        </div>
      </section>
    </div>
  )
}

export default VideoSection
