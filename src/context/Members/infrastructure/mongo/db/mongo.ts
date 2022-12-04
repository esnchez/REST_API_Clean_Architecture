import "dotenv/config"
import {connect} from "mongoose"


export const dbConnect = async () => {
    const DB_URI = process.env.DB_URI
    if (typeof(DB_URI) === 'string'){
        await connect(DB_URI)    
    } 
}