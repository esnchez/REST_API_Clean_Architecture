import { Emailer } from "../../infrastructure/utils/Emailer";
import { MemberNomination } from "../entities/MemberNomination";

export class AcceptanceNominationService {

    private readonly emailService : Emailer

    constructor() {
        this.emailService = new Emailer()
    }

    async run( memberNomination : MemberNomination) : Promise<MemberNomination>{

        if (memberNomination.talentScore > 8 ) {
            memberNomination.acceptance = true
        } else {
            //Send email to both referring and nominated members
            this.emailService.sendEmail(memberNomination.emailRef, memberNomination.emailNom)
        }
        return memberNomination
    }
}