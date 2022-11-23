import Image from 'next/future/image'
import Layout from '../components/layout'

export default function Home() {
  return (
    <>
      <Layout titulo={'Inicio'} description={'Mantenimiento aries acondicionados, Estudios Energeticos, Subestaciones, calbeado estructurado, fibra optica'}>
          <main className='animate__animated animate__fadeIn'>
          <div className='text-white md:pb-24 md:pt-16'  style={{ backgroundColor: '#1089d2'}}>
                <div className=' container mx-auto' >
                    <p className='text-center font-extrabold text-6xl'>TELECOMUNICACIONES</p>
                    <p className=' text-justify text-5xl py-12 px-7 font font-extralight'>
                          QUATCOM EN UNA EMPRESA MEXICANA Y YUCATECA QUE SE CARACTERIZA POR
                          OFRECER SOLUCIONES INTEGRALES EN TELECOMUNICACIONES A SUS CLIENTES.
                          CONSTRUIMOS LOS PRICIPALES MEDIOS DE COMUNICACIÓN, FIBRA OPTICA,
                          CABLEADO ESTRUCTURADO, WIFI Y MICROONDAS, ASI COMO LA INFRAESTRUCTURA
                          NECESARIA PARA SU CORRECTA INSTALACION.
                          
                    </p>
                    </div>
                
                    <div className='container mx-auto '>
                        <p className=' text-justify text-5xl px-7 font-extralight'>
                          EL DOMINIO EN LA ADMINISTRACION DE PROYECTOS Y MAS DE 20 AÑOS DE
                          EXPERIECIA EN TELECOMUNICACIONES, SON NUESTROS PRINCIPALES PILARES.
                          MAS DE 20,000 KM DE FIBRA OPTICA INSTALADA NOS RESPALDAN.
                                    
                        </p>
                </div>

                <Image src='/img/fondoQuatcom.png' width={ 1200 }  height={ 300 } alt="fibraQuatcom" className='mx-auto pt-16'/>
          </div>
            
            
            
          </main>
      </Layout>
    </>
  )
}
