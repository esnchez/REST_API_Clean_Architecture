import {Request, Response, NextFunction} from "express"

export const isAdmin = (req : Request, res : Response, next: NextFunction) =>{
    try {
        if (req.body.role === 'ADMIN'){
            next()
        } else{
            res.sendStatus(401)
        }
        
    } catch (error) {
        console.log(error)
    }
}