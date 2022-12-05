import { EnumValueObject } from "../../../Shared/domain/EnumValueObject";

export class Score extends EnumValueObject<Number>{
    
    constructor(value : Number) {
        super(value, [0,1,2,3,4,5,6,7,8,9,10] )
    }
    
    protected throwErrorForInvalidValue(value: Number): void {
        throw new Error("Submitted an invalid value");
    }

} 