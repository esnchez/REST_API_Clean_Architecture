interface ScoreProps {
    points: number,
}
// impl value object!

export class Score implements ScoreProps{
    public points: number;

    constructor(score : number) {
        this.points = score;
        this.checkScoreIsValid( score, [0,1,2,3,4,5,6,7,8,9,10])
    }

    private checkScoreIsValid(score: number, validValues : number[] ): void {
        if(!validValues.includes(score)){
            //TODO: Manage error
            throw new Error("Submitted an invalid value")
        }
    }

} 