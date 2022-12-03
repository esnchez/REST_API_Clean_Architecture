import { MemberNomination } from "../../domain/entities/MemberNomination";
import { MemberRepository } from "../../domain/repositories/MemberRepository";
import { ExistNominationService } from "../../domain/services/ExistNominationService";
import { ValidMemberService } from "../../domain/services/ValidMemberService";

export class createNomination {

    private readonly memberRepository : MemberRepository
    private readonly existNominationService : ExistNominationService
    private readonly validMemberService : ValidMemberService
    

    constructor(memberRepository : MemberRepository) {
        this.memberRepository = memberRepository
        this.existNominationService = new ExistNominationService(memberRepository)
        this.validMemberService = new ValidMemberService(memberRepository)
    }

    //evaluate uuids and destructuring
    async run(nomination : MemberNomination): Promise<void> {

        //is valid member?
        const isMemValid : boolean = await this.validMemberService.run(nomination.emailReferring)
        if (!isMemValid) throw new Error("Member is not valid")

        //logica de controlar si una nominació ja està feta? 
        const isNomSaved : boolean = await this.existNominationService.run(nomination.emailNominated)
        if (isNomSaved) throw new Error("Nomination already stored")

        // if (nomination.talentScore.points > 8) {
        //     nomination.acceptance = true
                
        // }

        await this.memberRepository.save(nomination)
    }
}