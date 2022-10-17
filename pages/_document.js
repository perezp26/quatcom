import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(){
    return(
            <Html>
                <Head>
                    <meta name="decription" content=" Quatcom - Estudios Energeticos Subestaciones Aires acondicionados" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700&display=swap" rel="stylesheet" />
                    <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet"/>
                </Head>
                <body>
                        <Main />
                        <NextScript /> 
                </body>
            </Html>
    )
}