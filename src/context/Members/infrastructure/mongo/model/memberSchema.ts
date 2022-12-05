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
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid E-mail'
            ]
        },
        role: {
            type: String,
            enum: ['MEMBER', 'ADMIN'],
            required: true,
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

//document/table name & the structure in the db  
export const MemberModel = model('members', MemberSchema)