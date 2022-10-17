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