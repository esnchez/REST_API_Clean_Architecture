import { MemberNomination } from "../entities/MemberNomination";
// import { MemberEmail } from "../entities/MemberEmail";


export interface MemberRepository {
    save(memberNomination : MemberNomination) : Promise<void>
    // save(nomination : MemberNomination) : Promise<MemberNomination>
    // save : (nomination : MemberNomination) =>  Promise<void>

    getByEmailNominated(emailNominated : string) : Promise<MemberNomination>

}