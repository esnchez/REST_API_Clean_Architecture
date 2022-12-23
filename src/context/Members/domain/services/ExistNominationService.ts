// import { MemberEmail } from "../entities/MemberEmail"
import { MemberNominationRepository } from "../repositories/MemberNominationRepository"

export class ExistNominationService {

    private readonly memberNominationRepository : MemberNominationRepository

    constructor(memberRepository : MemberNominationRepository) {
        this.memberNominationRepository = memberRepository
    }

    async run(email: string) : Promise<void> {

        const nomination = await this.memberNominationRepository.getByemailNom(email)
        if(nomination !== null) {
           throw new Error("Nomination already stored")
        }
    }

}