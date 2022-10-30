import Image from 'next/future/image'
import Layout from '../components/layout'

const HerramientasEquipo = () => {
  return (
    <Layout titulo={'Heramientas y Equipo'}> 
        <main className='animate__animated animate__fadeIn'>
          <h2 className="heading">Heramientas y Equipo</h2>
        </main>

        <div className='md:flex'>
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
    </Layout>
  )
}

export default HerramientasEquipo