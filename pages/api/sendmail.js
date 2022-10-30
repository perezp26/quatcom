const mail = require('@sendgrid/mail');


export default ( req, res) => {

    mail.setApiKey(body.apiKey);
    const body = JSON.parse(req.body);

    try {
        const message =`
        Nombre : ${body.nombre} \r\n
        Email : ${body.email} \r\n
        Mensaje : ${body.message}
    `

    const data = {
        to: 'ing.perez26@gmail.com',
        from: 'contacto@quatcom.com.mx',
        subject:'Envió dedes la pagina de quatcom.com.mx',
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    }

 
    mail.send(data, (success, err) =>{
        console.log(success);
        if(success) 
            console.log(success.response.body);
        else console.log(err);
    });

    res.status(200).json({ status:'ok' })

    } catch (error) {
        res.status(500).json( { status: 'error' });
    }

    

    
}