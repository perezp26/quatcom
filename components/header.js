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
                    <a className={ router.pathname === '/' ? styles.active : '' }>
                        Inicio
                    </a>
                </Link>
                <Link href="/nosotros">
                    <a className={ router.pathname === '/nosotros' ? styles.active : '' }>
                        Nosotros
                    </a>
                </Link>
                <Link href="/servicios">
                    <a className={ router.pathname === '/servicios' ? styles.active : '' }>
                        Servicios
                    </a>
                </Link>
                <Link href="/contacto">
                    <a className={ router.pathname === '/contacto' ? styles.active : '' }>
                        Contacto
                    </a>
                </Link>
            </nav>
            <Link href="/">
                <a>
                    <Image src="/img/logoQuatcom.png" width={300} height={200} alt='logotipo'/>
                </a>
            </Link>

        </div>
    </header>
  )
}

export default Header