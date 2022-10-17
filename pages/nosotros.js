

import Link from 'next/link'

import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'
const Nosotros = () => {
  return (
        <Layout title={'Nosotros'}>
            <main>
                    <h2 className="heading">Nosotros</h2>
                    <div className="contenedor">
                        <div>
                            <h2 className="subtitle">Nuestra Misión</h2>
                            <p>
                                Ofrecer el mejor servicio y calidad en la instalación, construcción y mantenimiento de
                                soluciones integrales de infraestructura ideal y eficiente para nuestros clientes.
                            </p>
                        </div>
                    </div>
                    <div className={styles.contenidoSeccion2}>
                        <div className={`contenedor`}>
                                <h2 className="subtitle">Nuestros Valores</h2>
                                <p>
                                        Estos siempre estarán trabajando en la misma dirección de nuestra misión y serán la base
                                        para lograr la visión de nuestra empresa por medio de:
                                            <br />
                                            -Honestidad
                                            <br />
                                            -Responsabilidad
                                            <br />
                                            -Respeto
                                            <br />
                                            -Cordialidad
                                            <br />
                                            -Entrega Personal`
                                </p>
                        </div>
                    </div>
                    <div className="contenedor">
                                <h2 className="subtitle">Nuestra Visión</h2>
                                <p>
                                    Ser una empresa líder en la construcción, instalación, mantenimiento y asesoría de productos
                                    y servicios integrales e innovadores de infraestructura de telecomunicaciones, con el fin de
                                    contribuir a mejorar la productividad de nuestros clientes.
                                </p>
                        </div>
            </main> 
        </Layout>
    )
}

export default Nosotros