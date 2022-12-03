import { Emailer } from "../../infrastructure/emailer";
import { MemberNomination } from "../entities/MemberNomination";

export class AcceptanceNominationService {

    private readonly emailService : Emailer

    constructor() {
        this.emailService = new Emailer()
    }

    async run( memberNomination : MemberNomination) : Promise<MemberNomination>{

        //memberNomination.acceptance = false

        if (memberNomination.talentScore.points > 8 ) {
            memberNomination.acceptance = true
        } else {
            //this.emailService.sendEmail(memberNomination.emailReferring, memberNomination.emailNominated)
        }
        return memberNomination
    }
}