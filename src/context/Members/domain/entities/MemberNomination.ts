// import { MemberEmail } from "./MemberEmail";
// import { Score } from "./Score";


export type MemberNominationProps = {
    id: number,
    emailReferring: string,
    emailNominated: string,
    description: string,
    communityScore : number
    talentScore : number
    acceptance: boolean
}


export class MemberNomination {
    public id: number;
    public emailReferring: string;
    public emailNominated: string;
    public description: string;
    public communityScore: number;
    public talentScore: number;
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