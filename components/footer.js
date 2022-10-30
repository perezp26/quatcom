import Link from "next/link"

import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={ `${styles.footer} ` }>
      <div className={ `contenedor ${ styles.contenido }` }>
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

            <p className={styles.copyright}>Todos los derechos reservados { new Date().getFullYear() }</p>
      </div>
    </footer>
  )
}

export default Footer