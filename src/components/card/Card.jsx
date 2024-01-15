import Image from 'next/image'
import Button from '../button/Button'
import btnStyle from '@/components/button/button.module.scss'
import style from '@/components/card/card.module.scss'

function Card({ image, imageAlt, title, subtitle, buttonText, click }) {
  return (
    <>
      <div className={style.cards}>
        <div className={style.imgContainer}>
          <Image src={image} alt={imageAlt} fill />
        </div>
        <div className={style.textBox}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
          <Button
            type='button'
            style={{ width: '95%' }}
            className={btnStyle.productBtn}
            data-bs-toggle='modal'
            data-bs-target='#staticBackdrop'
            onClick={() => {
              click && click()
            }}
          >
            <p className={btnStyle.text}>{buttonText}</p>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Card
