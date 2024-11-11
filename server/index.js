// server/index.js
import express, { response } from 'express';
import cors from 'cors';
import nodemailer from "nodemailer";
import { text } from '@fortawesome/fontawesome-svg-core';

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json({limit:"25mb"}));
app.use(express.urlencoded({limit:"25mb"}));
// Sample GET route
app.use((req, res,next)=>{
    res.setHeader("Access-Control-Allow-origin","*");
    next();
})


const sentEmail = ({userame ,email, subject , message })=>{
    return new Promise((resolve,reject)=>{
        var transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"kavikumarsenkili@gmail.com",
                pass:"ozqd zppy drlr ehmb"
            }
        });

        const mailConfig = {
            from: "kavikumarsenkili@gmail.com",
            to: "kavikumarsenkili@gmail.com",
            subject: subject,
            text: `Message from: ${email}\nUsername : ${userame}\n${message}`, // Include the user’s email in the message body
            replyTo: email // Set replyTo to the user's email
        };
        

        transporter.sendMail(mailConfig, (error, info)=>{
            if(error){
                console.log(error);
                return reject({message:`an error occured`});
            }

            return resolve({message:`email sended sucessfully`});
        })
    });
};




app.post("/sendEmail", (req, res) => {
    const { userame, email, subject, message } = req.body;
    sentEmail({userame, email, subject, message })  // Assuming sendEmail sends the email
        .then((response) => res.json({ message: response.message }))
        .catch((error) => res.status(500).json({ message: error.message }));
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
