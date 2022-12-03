import { MemberRepository } from "../repositories/MemberRepository"

export class ValidMemberService {

    private readonly memberRepository : MemberRepository

    constructor(memberRepository : MemberRepository) {
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