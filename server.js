import 'dotenv/config'

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const router = express.Router();

//server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
// console.log(process.env.REACT_APP_NODEMAILER_USER);
// console.log(process.env.REACT_APP_NODEMAILER_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'outlook',
  host: "smtp.office365.com", // hostname
  port: 587, // port for secure SMTP
  secureConnection: true,
  requiresAuth: true,
  domains: ["hotmail.com", "outlook.com"],
  tls: 'STARTTLS',
  auth: {
    user: process.env.REACT_APP_NODEMAILER_USER,
    pass: process.env.REACT_APP_NODEMAILER_PASS
  },  
  // tls: {
  //   rejectUnauthorized: true  // Desactivar la verificación de certificados
  // }  
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send")
  }
});

router.post("/contact", (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const message = req.body.message;
  
  const mail = {
    from: process.env.REACT_APP_NODEMAILER_USER,
    to: process.env.REACT_APP_NODEMAILER_RECIPIENT,
    subject: "¡TE CONTACTARON POR TRABAJO!- PORTAFOLIO",
    html: `
      ¡Buen día! ¡Felicidades, has sido contactado tu formulario de tu portafolio web!
      Los datos del mensaje del cliente son los siguientes:
      <h1>Full Name: ${fullName}</h1>
      <h3>Email: ${email}</h3>
      <h3>Message: ${message}</h3>
      `
  };
  
  contactEmail.sendMail(mail, (error) => {
    if ( error ) {
      res.json( error );
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});