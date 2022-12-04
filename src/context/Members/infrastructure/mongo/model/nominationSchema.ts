import {Schema, model} from "mongoose"
import { MemberNomination } from "../../../domain/entities/MemberNomination"
import { Score } from "../../../domain/entities/Score"

const NominationSchema = new Schema<MemberNomination>(
    {
        id: {
            type: String,
            required: true
        },
        emailRef: {
            type: String,
            required: true
        },
        emailNom: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        communityScore: {
            type: Number,
            required: true
        },
        talentScore: {
            type: Number,
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
export const NominationModel = model('nominations', NominationSchema)