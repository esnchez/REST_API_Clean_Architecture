import nodemailer from "nodemailer"
import { NotificationSenderRepository } from "../../domain/repositories/NotificationSenderRepository"

export class Emailer implements NotificationSenderRepository {

    private readonly transporter : nodemailer.Transporter
 
    constructor() {

        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth:{
                user: process.env.EMAIL_AUTH_USER,
                pass: process.env.EMAIL_AUTH_PWD
            }
            }
        )
    }

    async sendEmail(emailAddressReferring : string, emailAddressNominated : string) : Promise<void> {

        const message = {
            // from: "admin@nova.com",
            to: [emailAddressReferring, emailAddressNominated],
            subject: `Updates on Nova membership status`,
            html:
            `<div>
            <p>Hello ${emailAddressNominated}. We have received a nomination from your colleague ${emailAddressReferring}. 
            We are grateful for your efforts and willingness to improve, but unfortunately we cannot accept your nomination at this precise moment.</p>
            <p>We encourage you to keep working and try soon again!</p>
            </div>`
        }

        try {
            const emailSent = await this.transporter.sendMail(message)
            console.log(emailSent)    
        } catch (error) {
            console.error(error)
        }
    }

}