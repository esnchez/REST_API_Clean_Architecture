// import { MemberEmail } from "../entities/MemberEmail"
import { MemberNominationRepository } from "../repositories/MemberNominationRepository"

export class ExistNominationService {

    private readonly memberRepository : MemberNominationRepository

    constructor(memberRepository : MemberNominationRepository) {
        this.memberRepository = memberRepository
    }

    async run(email: string) : Promise<boolean> {

        const nomination = await this.memberRepository.getByemailNom(email)
        if(nomination !== null) {
           return true 
        }
        return false
    }

}