import Image from 'next/future/image'
import Link from 'next/link'
import Layout from '../components/layout'


export default function Home() {
  return (
    <>
      <Layout titulo={'Inicio'} description={'Mantenimiento aries acondicionados, Estudios Energeticos, Subestaciones, calbeado estructurado, fibra optica'}>
          <main>
            <div className='contenedor'>
              <p className=' text-justify '>
                    QUATCOM es una empresa yucateca que nace de la necesidad de realizar
                    soluciones integrales de redes para voz, datos, imagen y seguridad. Así como
                    instalación y mantenimiento a conmutadores telefónicos Voz/IP para
                    instituciones públicas y privadas.
              </p>
            </div>
            <Image src='/img/personal_quatcom.webp' width={ 18012 }  height={ 504 } alt="personal"/>
            <div className='contenedor'>
              <p className=' text-justify'>
                          Nos hemos caracterizado por ser una empresa que se distingue de las demás por
                          llevar a cabo servicios de calidad y con una eficiencia comprobada. Esto se logra
                          con base en nuestros 3 pilares fundamentales:
                          
              </p>
              <div className="md:flex font-semibold">
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
            <div className=' container mx-auto text-center'>
                <h2 className="heading">Equipos Especializados</h2>
            </div>
            <div className='md:flex bg-slate-400'>
                    <div className='md:w-1/3 text-center'>
                            <Image src='/img/megguer.png' width={ 320 }  height={ 450 } alt="megguer" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > Megguer </p>
                            <p className='px-3'> Prueba de resistencia de aislamiento de cable de potencia</p>
                    </div>
                    <div className='md:w-1/3 text-center'>
                            <Image src='/img/terrometro.png' width={ 280 }  height={ 450 } alt="terrometro" className='mx-auto'/>
                            <p className=' text-blue-900 font-semibold text-5xl' > Megguer de resistencia a Tierra </p>
                            <p className='px-3'> Medición de resistencia a tierra con historial de Datos</p>
                    </div>

                    <div className='md:w-1/3 text-center'>
                            <Image src='/img/camaratermo.png' width={ 255 }  height={ 450 } alt="camara termografica" className='mx-auto'/>
                            <p className=' text-blue-900 font-semibold text-5xl' > Cámara Termografica </p>
                            <p className='px-3'> Detección de puntos calientes en transformadores, tableros, interruptores</p>
                    </div>
              </div>
            <div className=' container mx-auto text-center'>
                <h2 className="heading">Nuestros Clientes</h2>
            </div>
            <div className='md:flex '>
                    <div className='md:w-1/3'>
                            <Image src='/img/carso.png' width={ 510 }  height={ 200 } alt="grupo carso" className=' mx-auto md:px-10' />
                    </div>
                    <div className='md:w-1/3'>
                            <Image src='/img/totalplay.png' width={ 510 }  height={ 200 } alt="totalplay" className='mx-auto md:px-10'/>
                    </div>

                    <div className='md:w-1/3'>
                            <Image src='/img/at_t.png' width={ 510 }  height={ 200 } alt="at&t" className='mx-auto md:px-10'/>
                    </div>
              </div>
          </main>
      </Layout>
    </>
  )
}
