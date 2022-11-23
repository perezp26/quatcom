import Link from 'next/link'
import Image from 'next/future/image'
import Layout from '../components/layout'
import Redes from '../components/servicios/redes'
import Seguridad from '../components/servicios/seguridad'
import Domotica from '../components/servicios/domotica'
import Obracivil from '../components/servicios/obracivil'
const Servicios = () => {
  return (
        <Layout titulo={'Servicios'}> 
            <main className='animate__animated animate__fadeIn'>
                  <h2 className="heading">Servicios</h2>
                    <p className=' contenedor text-justify'>
                      A lo largo de nuestras operaciones, la compañía ha capacitado a sus técnicos
                      haciéndonos especialistas en la instalación, implementación, diseño e ingeniería de
                      cualquier sistema de redes, cableado estructurado instalado y comercializado
                      actualmente.<br/>
                      Así mismo, en Quatcom comunicaciones ofrecemos servicios
                      técnicos de diseño, construcción y mantenimiento de sistemas
                      de redes, así como la construcción de la infraestructura
                      necesaria para la instalación de las mismas (canalizaciones,
                      obra civil, etc.) adecuándonos a las necesidades de nuestros
                      clientes.
                    </p> 
                <div className=" bg-gray-100">
                  <div className=" contenedor md:flex ">
                        <div className=' md:w-1/3'>
                              <Image  src='/img/redesycomunicaciones.jpg' 
                                    width={ 500 } 
                                    height= {756} 
                                    className=' p-12'
                                    alt='redes y telecomunicaciones' />
                        </div>
                        <div className=' md:w-2/3 md:py-10'>
                        <Redes />
                        </div>
                  </div>
                </div>

                <div className='contenedor md:flex'>
                  <div className=' md:w-1/3'>
                              <Image  src='/img/obracivil.jpg' 
                                  width={ 500 } 
                                  height= {750} 
                                  className=' p-12'
                                  alt='Obra Civil' />
                  </div>
                  <div className=' md:w-2/3'>
                      <Obracivil />
                  </div>
                </div>
               
                <div className='contenedor md:flex'>
                  <div className=' md:w-1/3'>
                              <Image  src='/img/seguridad.png' 
                                  width={ 500 } 
                                  height= {750} 
                                  className=' p-12'
                                  alt='seguridad' />
                  </div>
                  <div className=' md:w-2/3'>
                      <Seguridad />
                  </div>
                </div>

                <div className=" bg-gray-100">
                  <div className=" contenedor md:flex ">
                        <div className=' md:w-1/3'>
                              <Image  src='/img/domotica.png' 
                                    width={ 500 } 
                                    height= {756} 
                                    className=' p-12'
                                    alt='domotica' />
                        </div>
                        <div className=' md:w-2/3 py-10'>
                        <Domotica />
                        </div>
                  </div>
                </div>

            </main>
        </Layout>
    )
}

export default Servicios