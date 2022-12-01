// export type ScoreProps = {
//     points: number,
// }

export class Score {
    public points: number;

    constructor(score : number) {
        this.points = score;
        //possible change
        this.checkScoreIsValid( score, [0,1,2,3,4,5,6,7,8,9,10])
    }

    private checkScoreIsValid(score: number, validValues : number[] ): void {
        if(!validValues.includes(score)){
            throw new Error("Submitted an invalid value")
        }
    }

} 