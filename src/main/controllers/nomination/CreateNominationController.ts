import { Request, Response } from "express";
import { CreateNomination } from "../../../context/Members/application/usecases/CreateNomination";
import { MemberNomination } from "../../../context/Members/domain/entities/MemberNomination";
import { InMemoryRepository } from "../../../context/Members/infrastructure/InMemoryRepository";
import { Score } from "../../../context/Members/domain/entities/Score";

export const createNominationController = async (req: Request, res: Response) : Promise<void> => {

    //TODO: persistentRepo
    const inMemoryRepository = new InMemoryRepository()
    const createNominationUseCase = new CreateNomination(inMemoryRepository)
    
    //move logic to the domain...
    const nominationToCreate : MemberNomination = {
        id: req.body.id,
        emailReferring: req.body.emailReferring,
        emailNominated: req.body.emailNominated,
        description: req.body.description,
        communityScore: new Score(req.body.communityScore),
        talentScore: new Score(req.body.talentScore),
        acceptance: req.body.acceptance
    }
    
    try {
        await createNominationUseCase.run(nominationToCreate)
        res.json("user created")
        console.log(inMemoryRepository.nominations)
    } catch (e){
        console.log(e)
    }

}

