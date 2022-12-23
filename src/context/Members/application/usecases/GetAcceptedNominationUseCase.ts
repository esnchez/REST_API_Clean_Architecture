import { MemberNomination } from "../../domain/entities/MemberNomination";
import { MemberNominationRepository } from "../../domain/repositories/MemberNominationRepository";

export class GetAcceptedNominationUseCase {

    private readonly memberNominationRepository : MemberNominationRepository

    constructor(memberRepository : MemberNominationRepository) {
        this.memberNominationRepository = memberRepository
    }

    async run(): Promise<MemberNomination[] | null> {
        
        //TODO: get back to accepted nominations only
        return await this.memberNominationRepository.getAllNomination() 
    }
}