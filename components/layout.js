import Head from 'next/head'

import Header from './header'
import Footer from './footer'
const Layout = ({children, titulo = '', description = 'Mantenimiento aries acondicionados, Estudios Energeticos, Subestaciones, calbeado estructurado, fibra optica'}) => {
  return (
        <>
            <Head>
                <title >{ `Quatcom - ${ titulo }`}</title>
                <meta name="description" content={ description } />
            </Head>
            <Header />
              {children}
            <Footer />    
        </>
  ) 
}

export default Layout