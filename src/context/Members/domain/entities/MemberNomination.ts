import { v4 as uuid } from "uuid";
// import { Score } from "./Score";


export type MemberNominationRequest = {
    emailRef: string,
    emailNom: string,
    description: string,
    communityScore : number
    talentScore : number
}

export class MemberNomination {
    
    public id: string;
    public emailRef: string;
    public emailNom: string;
    public description: string;
    public communityScore: number; //Score
    public talentScore: number; //Score
    public acceptance: boolean;
    private validValues : Number[] = [0,1,2,3,4,5,6,7,8,9,10]

    constructor( request : MemberNominationRequest ) {
        this.checkValuesAreValid(request.talentScore,request.communityScore, this.validValues)

        this.id = uuid();
        this.emailRef = request.emailRef;
        this.emailNom = request.emailNom;
        this.description = request.description;
        this.communityScore = request.communityScore;
        this.talentScore = request.talentScore;
        this.acceptance = this.acceptanceMethod(request.talentScore)
    }



    private checkValuesAreValid(value1: Number, value2: Number, validValues: Number[] ): void {
        if (!validValues.includes(value1) || !validValues.includes(value2)) {
            throw new Error("Submitted an invalid value");
        }
    }

    private acceptanceMethod(value : Number) : boolean {
        if (value < 8) {
            return false
        }
        return true
    }

    public static create(request : MemberNominationRequest): MemberNomination {

        const nomination = new MemberNomination(request)

        //Record a new membernominationcreation event

        return nomination;

    }

    

} 