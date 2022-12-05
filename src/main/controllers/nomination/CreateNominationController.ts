import { Request, Response } from "express";
import { CreateNominationUseCase } from "../../../context/Members/application/usecases/CreateNominationUseCase";
import httpStatus from "http-status";


export class CreateNominationController {

    private readonly createNominationUseCase : CreateNominationUseCase
    
    constructor(createNominationUseCase : CreateNominationUseCase) {
        this.createNominationUseCase = createNominationUseCase
    }

    createNom = async (req : Request, res : Response) => {
        try {
            await this.createNominationUseCase.run(req.body)
            res.status(httpStatus.CREATED).json("Created successfully")
        } catch (error) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send("error")
        }
    }
}

