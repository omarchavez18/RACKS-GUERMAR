import React from 'react'
import style from './titleSeparator.module.scss'
const TitleSeparator = ({ title }) => {
  return (
    <div
      data-aos='fade-down'
      data-aos-easing='linear'
      data-aos-duration='1500'
      title='Otros de nuestros productos'
      className={style.title}
    >
      <h2>{title}</h2>
      <section className={style.orangeLine}></section>
    </div>
  )
}

export default TitleSeparator
