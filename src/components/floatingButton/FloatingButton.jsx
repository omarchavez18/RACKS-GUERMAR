'use client'
import React from 'react'
import style from './floatingButton.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import whatsappColorIcon from '@/../src/../public/icons/colorWhatsappIcon.svg'
import emailIcon from '@/../public/icons/mail.svg'
import telephoneIcon from '@/../public/animatedIcons/telephone.svg'
import clientSupportIcon from '@/../public/icons/clientSupportIcon.svg'

const FloatingButton = () => {
  const [additionalButtons, setAdditonalButtons] = useState(false)
  const [color, setColor] = useState(true)
  const [mostrarBotones, setMostrarBotones] = useState(false)

  const toggleBottons = () => {
    setAdditonalButtons(!additionalButtons)
    setColor(!color)
    setMostrarBotones(!mostrarBotones)
  }

  return (
    <div className={style.floatingButtonContainer}>
      <button
        className={color ? style.floatingButton : style.clickedBtn}
        onClick={toggleBottons}
      >
        <Image
          src={clientSupportIcon}
          alt='callcenter icon'
          width={40}
          height={40}
        />
      </button>

      {additionalButtons && (
        <div
          className={`${style.additionalButtons} ${
            mostrarBotones ? style.mostrarBotones : ''
          }
           `}
        >
          <button>
            <a
              href={
                'https://api.whatsapp.com/send?phone=+524771764248&text= Hola! buen dia, me gustaria realizar una cotizacion.'
              }
              target='_blank'
            >
              <Image
                src={whatsappColorIcon}
                alt='whatsapp icon'
                height={30}
                width={30}
              />
            </a>
          </button>

          <button>
            <a
              href='mailto:ventas_guermar@hotmail.com?subject=Mail de nuestro sitio web&body=Hola buen día, me gustaria recibir más información sobre...'
              target='_blank'
            >
              <Image src={emailIcon} alt='email' width={30} height={30} />
            </a>
          </button>
          <button>
            <a href='tel:+524777142209' target='_blank'>
              <Image
                src={telephoneIcon}
                alt='telephone'
                width={30}
                height={30}
              />
            </a>
          </button>
        </div>
      )}
    </div>
  )
}

export default FloatingButton
