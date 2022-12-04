import { v4 as uuid } from "uuid";
import { Score } from "./Score";


interface MemberNominationProps {
    id: string,
    emailReferring: string,
    emailNominated: string,
    description: string,
    communityScore : Score
    talentScore : Score
    acceptance: boolean
}


export class MemberNomination implements MemberNominationProps{
    public id: string;
    public emailReferring: string;
    public emailNominated: string;
    public description: string;
    public communityScore: Score;
    public talentScore: Score;
    public acceptance: boolean

    constructor(emailReferring : string, emailNominated:string, description: string, 
        communityScore: number, talentScore: number) {
        this.id = uuid();
        this.emailReferring = emailReferring;
        this.emailNominated = emailNominated;
        this.description = description;
        this.communityScore = new Score(communityScore);
        this.talentScore = new Score(talentScore);
        this.acceptance = false
    }

} 