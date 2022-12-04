import {Schema, model} from "mongoose"
import { Member } from "../../../domain/entities/Member"

const MemberSchema = new Schema<Member>(
    {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

//document/table name & the structure in the db  
export const MemberModel = model('members', MemberSchema)