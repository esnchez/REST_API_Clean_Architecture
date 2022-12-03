import { MemberNomination } from "../../domain/entities/MemberNomination";
import { MemberRepository } from "../../domain/repositories/MemberRepository";
import { ExistNominationService } from "../../domain/services/ExistNominationService";
import { ValidMemberService } from "../../domain/services/ValidMemberService";
import { AcceptanceNominationService } from "../../domain/services/AcceptanceNominationService";

export class GetAcceptedNomination {

    private readonly memberRepository : MemberRepository

    constructor(memberRepository : MemberRepository) {
        this.memberRepository = memberRepository
    }

    //evaluate uuids and destructuring
    async run(): Promise<MemberNomination[]> {

        return await this.memberRepository.getAcceptedNomination()
    }
}