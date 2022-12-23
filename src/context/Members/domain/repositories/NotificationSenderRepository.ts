
export interface NotificationSenderRepository {

    sendEmail(emailAddressReferring : string, emailAddressNominated : string) : Promise<void>
}