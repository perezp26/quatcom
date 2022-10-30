import Image from 'next/future/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
      <Layout titulo={'Inicio'} description={'Mantenimiento aries acondicionados, Estudios Energeticos, Subestaciones, calbeado estructurado, fibra optica'}>
          <main className='animate__animated animate__fadeIn'>
          <div className='text-white md:py-24'  style={{ backgroundColor: '#1089d2'}}>
                <div className=' container mx-auto' >
                    <p className=' text-justify font-extralight text-5xl py-12 px-7'>
                            QUATCOM es una empresa yucateca que nace de la necesidad de realizar
                            soluciones integrales de redes para voz, datos, imagen y seguridad. Así como
                            instalación y mantenimiento a conmutadores telefónicos Voz/IP para
                            instituciones públicas y privadas.
                    </p>
                    </div>
                
                    <div className='container mx-auto '>
                        <p className=' text-justify font-extralight text-5xl px-7'>
                                    Nos hemos caracterizado por ser una empresa que se distingue de las demás por
                                    llevar a cabo servicios de calidad y con una eficiencia comprobada. Esto se logra
                                    con base en nuestros 3 pilares fundamentales:
                                    
                        </p>
                        <div className="md:flex text-5xl pb-16">
                            <div className=" md:w-1/3 mt-10 text-center">
                                Operar con técnicos calificados
                            </div>
                            <div className=' md:w-1/3 mt-10 text-center'>
                                Mantenernos en constante capacitación
                            </div>
                            <div className=' md:w-1/3 mt-10 text-center'>
                                Herramientas de última generación.
                            </div>
                        </div>
                </div>
          </div>
            
            
            
          </main>
      </Layout>
    </>
  )
}
