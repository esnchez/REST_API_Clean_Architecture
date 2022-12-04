import {Schema, model} from "mongoose"
import { MemberNomination } from "../../../domain/entities/MemberNomination"
import { Score } from "../../../domain/entities/Score"

const NominationSchema = new Schema<MemberNomination>(
    {
        id: {
            type: String,
            required: true
        },
        emailReferring: {
            type: String,
            required: true
        },
        emailNominated: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        communityScore: {
            type: Score,
            required: true
        },
        talentScore: {
            type: Score,
            required: true
        },
        acceptance: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

//document/table name & the structure in the db  
export const NominationModel = model('nomination', NominationSchema)