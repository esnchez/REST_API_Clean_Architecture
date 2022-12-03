import { MemberNomination } from "../entities/MemberNomination";
import { MemberRepository } from "../repositories/MemberRepository";

export class AcceptanceNominationService {

    private readonly memberRepository : MemberRepository

    constructor(memberRepository : MemberRepository) {
        this.memberRepository = memberRepository
    }

    async run( memberNomination : MemberNomination) : Promise<MemberNomination>{

        if (memberNomination.talentScore.points > 8 ) {
            memberNomination.acceptance = true
        }
        return memberNomination
    }
}