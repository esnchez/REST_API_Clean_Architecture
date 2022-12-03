import { MemberNomination } from "../domain/entities/MemberNomination";
import { Member } from "../domain/entities/Member";
import { MemberRepository } from "../domain/repositories/MemberRepository";


export class MemoryRepository implements MemberRepository {

    public members : Member[] = []
    public nominations : MemberNomination[] = []

    async save(memberNomination: MemberNomination): Promise<void> {
        this.nominations.push(memberNomination)
        // throw new Error("Method not implemented.");
    }
    async getByEmailNominated(email: string): Promise<MemberNomination | null> {
        const nom = this.nominations.find(x => x.emailNominated == email)
        if (nom !== undefined ) return nom
        return null
        // throw new Error("Method not implemented.");
    }

    async getMemberByEmail(email:string) : Promise<Member | null> {
        const mem = this.members.find(x => x.email == email)
        if (mem !== undefined) return mem
        return null
    }

}