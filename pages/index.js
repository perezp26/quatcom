import Image from 'next/future/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
      <Layout titulo={'Inicio'} description={'Mantenimiento aries acondicionados, Estudios Energeticos, Subestaciones, calbeado estructurado, fibra optica'}>
          <main className='animate__animated animate__fadeIn'>
          <div className='text-white md:pb-24 md:pt-16'  style={{ backgroundColor: '#1089d2'}}>
                <div className=' container mx-auto' >
                    <p className='text-center font-extrabold text-6xl'>TELECOMUNICACIONES</p>
                    <p className=' text-justify text-5xl py-12 px-7 font-bold'>
                          QUATCOM EN UNA EMPRESA MEXICANA Y YUCATECA QUE SE CARACTERIZA POR
                          OFRECER SOLUCIONES INTEGRALES EN TELECOMUNICACIONES A SUS CLIENTES.
                          CONSTRUIMOS LOS PRICIPALES MEDIOS DE COMUNICACIÓN, FIBRA OPTICA,
                          CABLEADO ESTRUCTURADO, WIFI Y MIDROONDAS, ASI COMO LA INFRAESTRUCTURA
                          NECESARIA PARA SU CORRECTA INSTALACION.
                          
                    </p>
                    </div>
                
                    <div className='container mx-auto '>
                        <p className=' text-justify text-5xl px-7 font-bold'>
                          EL DOMINIO EN LA ADMINISTRACION DE PROYECTOS Y MAS DE 20 AÑOS DE
                          EXPERIECIA EN TELECOMUNICACIONES, SON NUESTROS PRINCIPALES PILARES.
                          MAS DE 20,000 KM DE FIBRA OPTICA INSTALADA NOS RESPALDAN.
                                    
                        </p>
                </div>
          </div>
            
            
            
          </main>
      </Layout>
    </>
  )
}
