const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  secure: true,
  pool: true,
  maxConnections: 1,
});

contactEmail.verify((error) => {
  if (error) {
    console.log(`error ${error}`);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const subject = req.body.subject;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: subject,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>subject: ${subject}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
     if (error) {
       console.error('Error sending email:', error);
       res.status(500).json({ code: 500, status: "Error sending email" });
     } else {
       res.json({ code: 200, status: "Message Sent" });
     }
   });
});
