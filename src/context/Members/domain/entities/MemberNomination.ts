// import { MemberEmail } from "./MemberEmail";
import { Score } from "./Score";


export type MemberNominationProps = {
    id: string,
    emailReferring: string,
    emailNominated: string,
    description: string,
    communityScore : Score
    talentScore : Score
    acceptance: boolean
}


export class MemberNomination {
    public id: string;
    public emailReferring: string;
    public emailNominated: string;
    public description: string;
    public communityScore: Score;
    public talentScore: Score;
    public acceptance: boolean

    constructor( memberNominationProps : MemberNominationProps) {
        this.id = memberNominationProps.id;
        this.emailReferring = memberNominationProps.emailReferring;
        this.emailNominated = memberNominationProps.emailNominated;
        this.description = memberNominationProps.description;
        this.communityScore = memberNominationProps.communityScore;
        this.talentScore = memberNominationProps.talentScore;
        this.acceptance = memberNominationProps.acceptance
    }

        
        


} 