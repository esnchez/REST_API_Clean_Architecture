import { MemberNomination } from "../../domain/entities/MemberNomination";
import { MemberRepository } from "../../domain/repositories/MemberRepository";
import { ExistNominationService } from "../../domain/services/ExistNominationService";

export class createNomination {

    private readonly memberRepository : MemberRepository
    private readonly existNominationService : ExistNominationService
    

    constructor(memberRepository : MemberRepository) {
        this.memberRepository = memberRepository
        this.existNominationService = new ExistNominationService(memberRepository)
    }

    //evaluate uuids and destructuring
    async run(nomination : MemberNomination): Promise<void> {

        //logica de controlar si una nominació ja està feta? 
        const isSaved : boolean = await this.existNominationService.run(nomination.emailNominated)
        if (isSaved) throw new Error("Nomination already stored")

        // if (nomination.talentScore.points > 8) {
        //     nomination.acceptance = true
                
        // }

        await this.memberRepository.save(nomination)
    }
}