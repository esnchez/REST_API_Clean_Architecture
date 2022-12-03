import { MemberNomination } from "../../domain/entities/MemberNomination";
import { MemberNominationRepository } from "../../domain/repositories/MemberNominationRepository";

export class GetAcceptedNomination {

    private readonly memberRepository : MemberNominationRepository

    constructor(memberRepository : MemberNominationRepository) {
        this.memberRepository = memberRepository
    }

    //evaluate uuids and destructuring
    async run(): Promise<MemberNomination[]> {

        return await this.memberRepository.getAcceptedNomination()
    }
}