import {NextApiRequest, NextApiResponse} from "next";
import {SMTPClient} from "emailjs";
import {Message} from "emailjs";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    require('dotenv').config()

    const client = new SMTPClient({
        user: process.env.USER,
        password: process.env.PASSWORD_MAIL,
        host: process.env.HOST,
        port: 465,
        ssl: true
    })

    try {

        const message = {
            text: req.body.message + " | Sent from: " + req.body.email,
            from: req.body.email,
            to: process.env.USER,
            subject: `Message From ${req.body.name}`,
            attachment: [
                { data: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`, alternative: true },
            ],
        };

        client.send(message as unknown as Message, (err) => {
            console.log(err)
            res.status(500)
        })
        res.status(200)
    }catch (e) {
        console.log('Errore', e)
    }

}