import { Request, Response } from "express";
import { CreateNomination } from "../../../context/Members/application/usecases/CreateNomination";

export class CreateNominationController {

    private readonly createNominationUseCase : CreateNomination
    
    constructor(createNominationUseCase : CreateNomination) {
        this.createNominationUseCase = createNominationUseCase
    }

    createNom = async (req : Request, res : Response) => {
        try {
            await this.createNominationUseCase.run(req.body)
            res.json("Created successfully")
        } catch (error) {
            //TODO: manage error
            console.log(error)
        }
    }
}

