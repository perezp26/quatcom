import { useRef, useState} from 'react';
import Layout from '../components/layout'
import ReCAPTCHA from 'react-google-recaptcha'
import { UseForm } from '../hooks/UseForm'
import Link from 'next/link'

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

const Contacto = () => {

    const refCaptcha = useRef(null);
    const [statusEnviando, setStatuEnviando] = useState(false);
    const [msgEnvio, setMsgEnvio ] = useState('');
    const [valuesForm, handleInputChange, reset ] = UseForm( {
         nombre: '',
         email: '',
         message: ''
    })
    const { nombre, email, message } = valuesForm;

    const onChange = () => {
        //console.log(refCaptcha.current.getValue());
    }

    const handelOnSubmit = async(e) => {
            e.preventDefault();

            // const formData = {}
            // Array.from(e.currentTarget.elements).forEach( field=> {
            //     if(!field.name) return;
            //     formData[field.name] = field.value;
            // });
            setStatuEnviando(true); 
            const result = await fetch('api/sendmail',{
                                method:'POST',
                                body: JSON.stringify( valuesForm ),
                            });

            const resp = await result.json();

            console.log(resp);

            if (resp.status === 'ok') setMsgEnvio('Gracias por ponerse en contacto con nosotros en breve nos comunicaremos con ustedes.')
                                 else setMsgEnvio('Servicio no disponible por el momento intente mas tarde.')

            setStatuEnviando(false)

            reset();

    }

  return (
        <Layout titulo={'Contacto'}>
            <main className='contenedor animate__animated animate__fadeIn'>
                    <h2 className="heading">Contacto</h2>
                    
                    <div className='md:flex '>
                        <div className='md:w-1/2'>
                            {
                                msgEnvio !== '' ? <p className=' mt-10 text-blue-900 text-4xl text-center font-bold' >{ msgEnvio }</p> 
                                : <form method="post" onSubmit={handelOnSubmit}>
                                <p>
                                    <label htmlFor="name">Nombre</label>
                                    <input type="text" 
                                           name="nombre" 
                                           value = { nombre }
                                           onChange = { ({ target }) => handleInputChange(target.name, target.value) }
                                           className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '/>
                                </p>
                                <div className='mt-5'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" 
                                            name="email" 
                                            value = { email }
                                            onChange = { ({ target }) => handleInputChange(target.name, target.value) }
                                            className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '/>
                                </div>

                                <div className='mt-5'>
                                    <label htmlFor="message">Mensaje</label>
                                    <textarea   name="message" 
                                                value = { message }
                                                onChange = { ({ target }) => handleInputChange(target.name, target.value) }
                                                className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '/>
                                </div>
                                <ReCAPTCHA 
                                    ref={refCaptcha}
                                    sitekey= '6LddPZkiAAAAAMvIwg8xrbRLYU0Wdxt83AhRzxCZ'
                                    onChange={ onChange }
                                    className= "mt-5"
                                />
                                {
                                    statusEnviando ? <p>Enviando ...</p> :
                                    <button className='mt-10 w-full bg-blue-700 p-4 text-white rounded-lg transition ease-out duration-500 hover:shadow-2xl hover:touch-pinch-zoom hover:bg-blue-800'> Enviar </button>

                                }
                        </form>
                            }
                                
                        </div>
                        <div className='md:flex md:w-1/2  text-center '>
                                        <div className='w-full'>
                                                <p className=' mt-10 text-blue-900 text-5xl'>Siguenos en nuestras redes sociales</p>
                                                
                                                <div className='md:flex md:justify-center md:mt-20'>
                                                    <Link href="https://www.facebook.com/quatcom" passHref={true}>
                                                        <a target="_blank" className='md:pr-10'>  <i className="fa-brands fa-square-facebook text-9xl text-blue-800"></i> </a>
                                                    </Link>
                                                    <Link href="https://www.instagram.com/quatcom" passHref={true}>
                                                      <a  target="_blank" className='md:pl-10'><i className="fa-brands fa-square-instagram text-9xl text-rose-700"></i></a>
                                                    </Link>
                                                </div>
                                        </div>

                        </div>
                    </div>
                    
            </main> 
            
        </Layout>
    )
}

export default Contacto