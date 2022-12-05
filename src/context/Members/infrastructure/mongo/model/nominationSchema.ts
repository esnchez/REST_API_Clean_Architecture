import {Schema, model, Types } from "mongoose"
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
            required: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid E-mail'
            ]
        },
        emailNom: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid E-mail'
            ]
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