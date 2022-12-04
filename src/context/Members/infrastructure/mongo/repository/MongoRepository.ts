import { Member } from "../../../domain/entities/Member";
import { MemberNomination } from "../../../domain/entities/MemberNomination";
import { MemberNominationRepository } from "../../../domain/repositories/MemberNominationRepository";
import { NominationModel } from "../model/nominationSchema";
import { MemberModel } from "../model/memberSchema";

export class MongoRepository implements MemberNominationRepository {
    async save(memberNomination: MemberNomination): Promise<void> {
        await NominationModel.create(memberNomination)
    }
    async getByEmailNominated(email: string): Promise<MemberNomination | null> {
        const nomination = await NominationModel.findOne({email})
        return nomination
    }

    async getMemberByEmail(email: string): Promise<Member | null> {
        const member = await MemberModel.findOne({email})
        return member
    }
    async getAcceptedNomination(): Promise<MemberNomination[] | null> {
        const acceptedNoms = await NominationModel.find()
        return acceptedNoms
    }


    
}