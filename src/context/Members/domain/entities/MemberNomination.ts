import { v4 as uuid } from "uuid";
import { Score } from "./Score";


interface MemberNominationProps {
    id: string,
    emailRef: string,
    emailNom: string,
    description: string,
    communityScore : Score
    talentScore : Score
    acceptance: boolean
}


export class MemberNomination implements MemberNominationProps{
    public id: string;
    public emailRef: string;
    public emailNom: string;
    public description: string;
    public communityScore: Score;
    public talentScore: Score;
    public acceptance: boolean

    constructor(emailRef : string, emailNom:string, description: string, 
        communityScore: number, talentScore: number) {
        this.id = uuid();
        this.emailRef = emailRef;
        this.emailNom = emailNom;
        this.description = description;
        this.communityScore = new Score(communityScore);
        this.talentScore = new Score(talentScore);
        this.acceptance = false
    }

} 