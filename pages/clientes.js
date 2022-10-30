import Image from 'next/future/image'
import Layout from '../components/layout'

const Clientes = () => {
  return (
    <Layout titulo={'Clientes'}> 
        <main className='animate__animated animate__fadeIn'>
          <h2 className="heading">Clientes</h2>

            <div className='md:flex md:mt-20  '>
                    <div className='md:w-1/3 mb-32'>
                            <Image src='/img/carso.png' width={ 510 }  height={ 200 } alt="grupo carso" className=' mx-auto px-10' />
                    </div>
                    <div className='md:w-1/3 mb-32'>
                            <Image src='/img/totalplay.png' width={ 510 }  height={ 200 } alt="totalplay" className='mx-auto px-10'/>
                    </div>

                    <div className='md:w-1/3 mb-32'>
                            <Image src='/img/at_t.png' width={ 510 }  height={ 200 } alt="at&t" className='mx-auto md:px-10'/>
                    </div>
            </div>
        </main>
    </Layout>
  )
}

export default Clientes