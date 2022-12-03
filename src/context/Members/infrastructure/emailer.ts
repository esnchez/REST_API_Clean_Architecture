import nodemailer from "nodemailer"

export class Emailer {

    private readonly transporter : nodemailer.Transporter
 
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.",
            port: 465,
            secure: true,
            auth:{
                user:"",
                pass: ""
            }
            }
        )

    }

    async sendEmail(emailAddress1 : string, emailAddress2 : string) : Promise<void> {
        await this.transporter.sendMail({
            from: "admin@nova.com",
            to: [emailAddress1, emailAddress2],
            subject: "Updates on Nova membership status",
            html:"<p>We are grateful for your application but our standards have not been met</p>"
        })
    }

}