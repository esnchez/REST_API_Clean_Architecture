import { MemberNominationRepository } from "../repositories/MemberNominationRepository"

export class ValidMemberService {

    private readonly memberRepository : MemberNominationRepository

    constructor(memberRepository : MemberNominationRepository) {
        this.memberRepository = memberRepository
    }

    async run(email: string) : Promise<boolean> {

        const member = await this.memberRepository.getMemberByEmail(email)
        if(member !== null) {
           return true 
        }
        return false
    }

}