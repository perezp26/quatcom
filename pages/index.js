import Image from 'next/future/image'
import Link from 'next/link'
import Layout from '../components/layout'


export default function Home() {
  return (
    <>
      <Layout title={'Inicio'} description={'Mantenimiento aries acondicionados, Estudios Energeticos, Subestaciones, calbeado estructurado, fibra optica'}>
          <main>
            <div className='contenedor'>
              <p>
                    QUATCOM es una empresa yucateca que nace de la necesidad de realizar
                    soluciones integrales de redes para voz, datos, imagen y seguridad. Así como
                    instalación y mantenimiento a conmutadores telefónicos Voz/IP para
                    instituciones públicas y privadas.
              </p>
            </div>
            <Image src='/img/personal_quatcom.webp' width={ 18012 }  height={ 504 } />
            <div className='contenedor'>
              <p>
                          Nos hemos caracterizado por ser una empresa que se distingue de las demás por
                          llevar a cabo servicios de calidad y con una eficiencia comprobada. Esto se logra
                          con base en nuestros 3 pilares fundamentales:
                              Operar con técnicos calificados
                         
                          <br/>
                          Mantenernos en constante capacitación
                          <br/>
                          Contar con herramientas de última generación.
              </p>
            </div>
          </main>
      </Layout>
    </>
  )
}
