import { MemberNomination } from "../domain/entities/MemberNomination";
import { MemberRepository } from "../domain/repositories/MemberRepository";


export class MemoryRepository implements MemberRepository {

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

}