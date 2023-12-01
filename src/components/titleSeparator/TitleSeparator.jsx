import React from 'react'
import style from './titleSeparator.module.scss'
const TitleSeparator = ({ title }) => {
  return (
    <div className={style.title}>
      <h2>{title}</h2>
      <section className={style.orangeLine}></section>
    </div>
  )
}

export default TitleSeparator
