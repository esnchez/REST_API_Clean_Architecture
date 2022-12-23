import { MemberNomination } from "../entities/MemberNomination";
import { Member } from "../entities/Member";

export interface MemberNominationRepository {

    save(memberNomination : MemberNomination) : Promise<void>

    getByemailNom(email : string) : Promise<MemberNomination | null>

    getMemberByEmail(email : string) : Promise<Member | null>

    getAcceptedNomination() : Promise<MemberNomination[] | null>

    getAllNomination() : Promise<MemberNomination[] | null>

}