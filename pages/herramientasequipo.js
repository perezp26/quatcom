import Image from 'next/future/image'
import Layout from '../components/layout'

const HerramientasEquipo = () => {
  return (
    <Layout titulo={'Heramientas y Equipo'}> 
        <main className='animate__animated animate__fadeIn'>
          <h2 className="heading">Heramientas y Equipo</h2>
        </main>
        <div className='md:flex'>
                    <div className='md:w-1/3 text-center mt-10'>
                            <Image src='/img/empalmadora.png' width={ 320 }  height={ 450 } alt="Empalmadora de Fibra" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > Empalmadora de Fibra Optica </p>
                    </div>
                    <div className='md:w-1/3 text-center mt-10'>
                            <Image src='/img/OTDR.png' width={ 320 }  height={ 450 } alt="OTDR" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > OTDR </p>
                    </div>
                    <div className='md:w-1/3 text-center mt-10'>
                            <Image src='/img/medidorPotencia.png' width={ 320 }  height={ 450 } alt="Medidor de Potencia" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > Medidor de Potencia y Generador de Luz </p>
                    </div>
        </div>
        <div className='md:flex'>
                    <div className='md:w-1/3 text-center mt-10'>
                            <Image src='/img/cortadora.png' width={ 320 }  height={ 450 } alt="Cortadora Transversal" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > Cortadora Transvesal de Precisión </p>
                    </div>
                    <div className='md:w-1/3 text-center mt-10'>
                            <Image src='/img/pinza.png' width={ 320 }  height={ 450 } alt="Pinza" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > Pinza Peladora de Fibra Optica </p>
                    </div>
                    <div className='md:w-1/3 text-center mt-10'>
                            <Image src='/img/cortadoraTubo.png' width={ 320 }  height={ 450 } alt="Cortadora de Tubo" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > Cortadora de Tubo Holgado </p>
                    </div>
        </div>
        <div className='md:flex'>
                    <div className='md:w-1/3 text-center mt-10'>
                            <Image src='/img/empalmadoraCobre.png' width={ 320 }  height={ 450 } alt="Empaladora Cobre 25 pares" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > Empalmadora para Cobre de 25 pares </p>
                    </div>
                    <div className='md:w-1/3 text-center mt-10'>
                            <Image src='/img/empalmadoraCobre10.png' width={ 320 }  height={ 450 } alt="Empalmadora Cobre 10 pares" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > Empalmadora para Cobre de 10 pares </p>
                    </div>
                    <div className='md:w-1/3 text-center mt-10'>
                            <Image src='/img/microtelefono.png' width={ 320 }  height={ 450 } alt="Microtelefono" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > Microteléfono </p>
                    </div>
        </div>
        <div className='md:flex mb-16'>
                    <div className='md:w-1/3 text-center mt-10'>
                            <Image src='/img/lapizInductivo.png' width={ 320 }  height={ 450 } alt="Generador de tono y lapiz inductivo" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > Generador de Tono y Lapiz Inductivo </p>
                    </div>
                    <div className='md:w-1/3 text-center mt-10'>
                            <Image src='/img/guiaCobra.png' width={ 320 }  height={ 450 } alt="Guia Cobra" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > Guia Cobra </p>
                    </div>
                    <div className='md:w-1/3 text-center mt-5'>
                            <Image src='/img/megguer.png' width={ 235 }  height={ 450 } alt="megguer" className=' mx-auto' />
                            <p className=' text-blue-900 font-semibold text-5xl' > Megger </p>
                    </div>
        </div>
        <div className='md:flex'>
                    
                    <div className='md:w-1/3 text-center mb-10'>
                            <Image src='/img/terrometro.png' width={ 210 }  height={ 450 } alt="terrometro" className='mx-auto'/>
                            <p className=' text-blue-900 font-semibold text-5xl' > Megger de resistencia a Tierra </p>
                    </div>

                    <div className='md:w-1/3 text-center mb-10'>
                            <Image src='/img/camaratermo.png' width={ 190 }  height={ 450 } alt="camara termografica" className='mx-auto'/>
                            <p className=' text-blue-900 font-semibold text-5xl' > Cámara Termografica </p>
                    </div>
        </div>
    </Layout>
  )
}

export default HerramientasEquipo