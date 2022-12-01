// import { MemberEmail } from "../entities/MemberEmail"
import { MemberRepository } from "../repositories/MemberRepository"

export class ExistNominationService {

    private readonly memberRepository : MemberRepository

    constructor(memberRepository : MemberRepository) {
        this.memberRepository = memberRepository
    }

    async run(email: string) : Promise<boolean> {

        const nomination = await this.memberRepository.getByEmailNominated(email)
        if(nomination !== null) {
           return true 
        }
        return false
    }

}