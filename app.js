const express = require('express');
const app = express();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

app.post('/send', (req, res) => {

    const msg = {
        to: 'jcaycho@sapia.com.pe',
        from: 'josuejair.99@outlook.com',
        subject: 'Sengrid nodeJS',
        text: 'SendGrid con Node.js',
        html: '<strong>Jelou mai frien</strong>',
    };
    sgMail.send(msg).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
            // console.log(error.response.body.errors[0].message)
    })

    res.send({ "status": "Enviado" })
})

app.listen(3000, () => {
    console.log('Conectado al puerto 3000');
})