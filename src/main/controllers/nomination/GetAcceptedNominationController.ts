import { Request, Response } from "express";
import { GetAcceptedNominationUseCase } from "../../../context/Members/application/usecases/GetAcceptedNominationUseCase";
import httpStatus from "http-status";

export class GetAcceptedNominationController {

    private readonly getAcceptedNominationUseCase : GetAcceptedNominationUseCase
    
    constructor(getAcceptedNominationUseCase : GetAcceptedNominationUseCase) {
        this.getAcceptedNominationUseCase = getAcceptedNominationUseCase
    }

    getAcceptedNom = async (req : Request, res : Response) => {
        try {
            const nomData = await this.getAcceptedNominationUseCase.run()
            res.status(httpStatus.OK).json({nominations: nomData})
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({Error : error})  
        }
    }
}