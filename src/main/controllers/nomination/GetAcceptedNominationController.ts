import { Request, Response } from "express";
import { InMemoryRepository } from "../../../context/Members/infrastructure/InMemoryRepository";
import { GetAcceptedNomination } from "../../../context/Members/application/usecases/GetAcceptedNomination";

export const getAcceptedNominationController = async (req: Request, res: Response) : Promise<void> => {
    
    //TODO: persistentRepo
    const inMemoryRepository = new InMemoryRepository()
    const getAcceptedNominationUseCase = new GetAcceptedNomination(inMemoryRepository)

    try {
        const nominationsAccepted = await getAcceptedNominationUseCase.run()
        res.json({data: nominationsAccepted})
    } catch (e){
        console.log(e)
    }

}