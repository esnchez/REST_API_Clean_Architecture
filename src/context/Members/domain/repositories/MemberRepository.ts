import { MemberNomination } from "../entities/MemberNomination";
import { Member } from "../entities/Member";
// import { MemberEmail } from "../entities/MemberEmail";


export interface MemberRepository {

    save(memberNomination : MemberNomination) : Promise<void>
    // save(nomination : MemberNomination) : Promise<MemberNomination>
    // save : (nomination : MemberNomination) =>  Promise<void>

    getByEmailNominated(email : string) : Promise<MemberNomination | null>

    getMemberByEmail(email : string) : Promise<Member | null>

    getAcceptedNomination() : Promise<MemberNomination[]>
}