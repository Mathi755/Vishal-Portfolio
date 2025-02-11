const nodemailer = require('nodemailer');

function mailsender(){
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gn1189@srmist.edu.in',
            pass: 'python@Khdmdcm34k.'
        }
    });
    
    // Define email content
    let mailOptions = {
        from: 'gn1189@srmist.edu.in',
        to: 'pythonwithmathi@gmail.com',
        subject: 'Test Email',
        text: 'This is a test email from Node.js'
    };
    
    // Send the email
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

mailsender();

