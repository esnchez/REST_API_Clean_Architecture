import { MemberNomination } from "../domain/entities/MemberNomination";
import { Member } from "../domain/entities/Member";
import { MemberNominationRepository } from "../domain/repositories/MemberNominationRepository";


export class InMemoryRepository implements MemberNominationRepository {

    public members : Member[] = []
    public nominations : MemberNomination[] = []

    async save(memberNomination: MemberNomination): Promise<void> {
        this.nominations.push(memberNomination)
    }
    async getByEmailNominated(email: string): Promise<MemberNomination | null> {
        const nom = this.nominations.find(x => x.emailNominated == email)
        if (nom !== undefined ) return nom
        return null
    }

    async getMemberByEmail(email:string) : Promise<Member | null> {
        const mem = this.members.find(x => x.email == email)
        if (mem !== undefined) return mem
        return null
    }

    async getAcceptedNomination(): Promise<MemberNomination[]> {
        return this.nominations.filter(x => x.acceptance == true)
    }

}