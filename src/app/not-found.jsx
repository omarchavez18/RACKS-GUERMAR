import Link from 'next/link'
import style from '@/app/notFound.module.scss'
import Button from '@/components/button/Button'
import buttonStyle from '@/components/button/button.module.scss'

const NotFound = () => {
  return (
    <section className={style.container}>
      <h1>Error 404!</h1>
      <br />
      <h2>Pagina no encontrada!!</h2>
      <Button className={buttonStyle.btn}>
        <Link href={'/'}>Regresar a la pagina principal</Link>
      </Button>
    </section>
  )
}

export default NotFound
