import { MemberNomination } from "../../domain/entities/MemberNomination";
import { MemberRepository } from "../../domain/repositories/MemberRepository";
import { ExistNominationService } from "../../domain/services/ExistNominationService";
import { ValidMemberService } from "../../domain/services/ValidMemberService";
import { AcceptanceNominationService } from "../../domain/services/AcceptanceNominationService";

export class createNomination {

    private readonly memberRepository : MemberRepository
    private readonly existNominationService : ExistNominationService
    private readonly validMemberService : ValidMemberService
    private readonly acceptanceNominationService : AcceptanceNominationService

    constructor(memberRepository : MemberRepository) {
        this.memberRepository = memberRepository
        this.existNominationService = new ExistNominationService(memberRepository)
        this.validMemberService = new ValidMemberService(memberRepository)
        this.acceptanceNominationService = new AcceptanceNominationService(memberRepository)
    }

    //evaluate uuids and destructuring
    async run(nomination : MemberNomination): Promise<void> {

        //Nomination is submitted by a valid/stored member?
        const isMemValid : boolean = await this.validMemberService.run(nomination.emailReferring)
        if (!isMemValid) throw new Error("Member is not valid")

        //Nomination submitted is already stored?
        const isNomSaved : boolean = await this.existNominationService.run(nomination.emailNominated)
        if (isNomSaved) throw new Error("Nomination already stored")

        //Acceptance is handled depending on talent score
        const nomRefined : MemberNomination = await this.acceptanceNominationService.run(nomination)

        await this.memberRepository.save(nomRefined)
    }
}