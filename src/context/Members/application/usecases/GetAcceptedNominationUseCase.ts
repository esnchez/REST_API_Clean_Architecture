import { MemberNomination } from "../../domain/entities/MemberNomination";
import { MemberNominationRepository } from "../../domain/repositories/MemberNominationRepository";

export class GetAcceptedNominationUseCase {

    private readonly memberRepository : MemberNominationRepository

    constructor(memberRepository : MemberNominationRepository) {
        this.memberRepository = memberRepository
    }

    async run(): Promise<MemberNomination[] | null> {

        return await this.memberRepository.getAcceptedNomination() 
    }
}