import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const Header = () => {

    const router = useRouter();

  return (
    <header className={ styles.header }>
        <div className={`contenedor ${styles.barra}`}>
            <nav className={styles.navegacion}>
                <Link href="/">
                    Inicio
                </Link>
                <Link href="/nosotros">
                    Nosotros
                </Link>
                <Link href="/servicios">
                    Servicios
                </Link>
                <Link href="/contacto">
                  Contacto
                </Link>
            </nav>
            <Link href="/">
                <a className='mt-10'>
                    <Image src="/img/logoQuatcom.png" width={300} height={200} alt='logotipo'/>
                </a>
            </Link>

        </div>
    </header>
  )
}

export default Header