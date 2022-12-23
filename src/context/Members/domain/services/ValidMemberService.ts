import { MemberNominationRepository } from "../repositories/MemberNominationRepository"

export class ValidMemberService {

    private readonly memberNominationRepository : MemberNominationRepository

    constructor(memberRepository : MemberNominationRepository) {
        this.memberNominationRepository = memberRepository
    }

    async run(email: string) : Promise<boolean> {

        const member = await this.memberNominationRepository.getMemberByEmail(email)
        if(member !== null) {
           return true 
        }
        return false
    }

}