import { Emailer } from "../../infrastructure/utils/emailer";
import { MemberNomination } from "../entities/MemberNomination";

export class AcceptanceNominationService {

    private readonly emailService : Emailer

    constructor() {
        this.emailService = new Emailer()
    }

    async run( memberNomination : MemberNomination) : Promise<MemberNomination>{

        if (memberNomination.talentScore.points > 8 ) {
            memberNomination.acceptance = true
        } else {
            //send email
            //this.emailService.sendEmail(memberNomination.emailRef, memberNomination.emailNom)
        }
        return memberNomination
    }
}