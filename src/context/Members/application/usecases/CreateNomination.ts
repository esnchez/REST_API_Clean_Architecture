import { MemberNomination } from "../../domain/entities/MemberNomination";
import { MemberNominationRepository } from "../../domain/repositories/MemberNominationRepository";
import { ExistNominationService } from "../../domain/services/ExistNominationService";
import { ValidMemberService } from "../../domain/services/ValidMemberService";
import { AcceptanceNominationService } from "../../domain/services/AcceptanceNominationService";

export class CreateNomination {

    private readonly memberRepository : MemberNominationRepository
    private readonly existNominationService : ExistNominationService
    private readonly validMemberService : ValidMemberService
    private readonly acceptanceNominationService : AcceptanceNominationService


    constructor(memberRepository : MemberNominationRepository) {
        this.memberRepository = memberRepository
        this.existNominationService = new ExistNominationService(memberRepository)
        this.validMemberService = new ValidMemberService(memberRepository)
        this.acceptanceNominationService = new AcceptanceNominationService()
    }

    async run(emailRef : string, emailNom:string, description: string, communityScore: number, talentScore: number): Promise<void> {
                    
        //Nomination is submitted by a valid/stored member? TODO:manage error
        const isMemValid : boolean = await this.validMemberService.run(emailRef)
        if (!isMemValid) throw new Error("Member is not valid")

        //Nomination submitted is already stored? TODO:manage error
        const isNomSaved : boolean = await this.existNominationService.run(emailNom)
        if (isNomSaved) throw new Error("Nomination already stored")

        const nomination = new MemberNomination(emailRef, emailNom, description, communityScore, talentScore)

        //Acceptance/email is handled depending on talent score
        const nomRefined : MemberNomination = await this.acceptanceNominationService.run(nomination)
 
        await this.memberRepository.save(nomRefined)
    }
}