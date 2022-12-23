// import { Emailer } from "../../infrastructure/senders/Emailer";
import { MemberNomination } from "../entities/MemberNomination";
import { NotificationSenderRepository } from "../repositories/NotificationSenderRepository";

export class NotificationSenderService {

    private readonly notificationSenderRepository : NotificationSenderRepository

    constructor( notificationRepository : NotificationSenderRepository) {
        this.notificationSenderRepository = notificationRepository
    }

    async run( memberNomination : MemberNomination) : Promise<void> {

        if (!memberNomination.acceptance) {
            this.notificationSenderRepository.sendEmail(memberNomination.emailRef, memberNomination.emailNom)
        } 
    }
}