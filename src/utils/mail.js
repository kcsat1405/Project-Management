import mailgen from 'mailgen';
import nodemailer from "nodemailer"

const emailVerificationContent= (userName,verificationUrl)=>{
    return {
        body:{
            name: userName,
            intro: 'Welcome to our service! We\'re very excited to have you on board.',
            action: {
                instructions: "To verify your email please click on the following button",
                button:{
                    color: "#1aae5aff",
                    text: "Verify your email",
                    link: verificationUrl
                },
        },
        outro: "Need help, or have questions? Just reply to this email, we'd love to help."
    },
}
}

const forgotPasswordContent= (userName,resetUrl)=>{
    return {
        body:{
            name: userName,
            intro: 'You have requested to reset your password. Please click the button below to proceed.',
            action: {
                instructions: "To reset your password, please click on the following button",
                button:{
                    color: "#1aae5aff",
                    text: "Reset your password",
                    link: resetUrl
                },
        },
        outro: "If you didn't request a password reset, please ignore this email."
    },
}
}

const sendEmail= async(options)=>{
    const mailGenerator=new mailgen({
        theme: "default",
        product:{
            name: "Task Manager",
            link: "https://taskmanager.com"
        }
    })

    const emailTextual=mailGenerator.generatePlaintext(options.mailgenContent)
    const emailHTML=mailGenerator.generate(options.mailgenContent)

    const transporter=nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth:{
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        } 
    })

    const mail={
        from: "mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHTML
    }

    try{
        await transporter.sendMail(mail)
    }catch(err){
        console.error("Email service failed silently. Make sure you have provided your MAILTRAP credentials in the .env file");
        console.error("Error:", error);
    }
    }


export{
    emailVerificationContent,
    forgotPasswordContent,
    sendEmail
}