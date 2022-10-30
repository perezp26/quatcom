import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const Header = () => {

    const router = useRouter();

  return (
    <header className={ `relative ${ styles.header} ` }>
            <Image src='/img/bannerQuatcom.jpg' width={ 2500 }  height={ 600 } alt="quatcom" className=' mx-auto ' />
        <div className={` ${styles.barra} md:absolute md:bottom-7 md:left-20 `}>
            <nav className={`${styles.navegacion}`}>
                <Link href="/">
                    Inicio
                </Link>
                <Link href="/nosotros">
                    Nosotros
                </Link>
                <Link href="/servicios">
                    Servicios
                </Link>
                <Link href="/herramientasequipo">
                    Herramientas y Equipo
                </Link>
                <Link href="/clientes">
                    Clientes
                </Link>
                <Link href="/contacto">
                  Contacto
                </Link>
            </nav>

        </div>
    </header>
  )
}

export default Header