const mail = require('@sendgrid/mail');

const SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY

export default ( req, res) => {

    const body = JSON.parse(req.body);
    mail.setApiKey(SENDGRID_API_KEY);

    try {
        const message =`
        Nombre : ${body.nombre} \r\n
        Email : ${body.email} \r\n
        Mensaje : ${body.message}
    `

    const data = {
        to: 'obroca@quatcom.com.mx',
        from: 'contacto@quatcom.com.mx',
        subject:'Envió dedes la pagina de quatcom.com.mx',
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    }

 
    mail.send(data, (success, err) =>{
        if(success) console.log(success.response.body);
        else console.log(err);

        res.status(200).json({ status:'ok', success : success, error : err})
    });

    //res.status(200).json({ status:'ok',  })

    } catch (error) {
        res.status(500).json( { status: 'error' });
    }

    

    
}