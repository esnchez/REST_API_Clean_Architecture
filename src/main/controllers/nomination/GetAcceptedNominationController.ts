import { Request, Response } from "express";
import { GetAcceptedNomination } from "../../../context/Members/application/usecases/GetAcceptedNomination";

export class GetAcceptedNominationController {

    private readonly getAcceptedNominationUseCase : GetAcceptedNomination
    
    constructor(getAcceptedNominationUseCase : GetAcceptedNomination) {
        this.getAcceptedNominationUseCase = getAcceptedNominationUseCase
    }

    getAcceptedNom = async (req : Request, res : Response) => {
        try {
            const nomData = await this.getAcceptedNominationUseCase.run()
            console.log("hey", nomData)
            res.json({nominations: nomData})
        } catch (error) {
            //TODO: manage error
            console.log(error)            
        }
    }
}