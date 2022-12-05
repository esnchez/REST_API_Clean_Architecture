import { CreateNominationController, GetAcceptedNominationController } from '../controllers';
import { Router} from 'express';
import { CreateNominationUseCase } from '../../context/Members/application/usecases/CreateNominationUseCase';
import { GetAcceptedNominationUseCase } from '../../context/Members/application/usecases/GetAcceptedNominationUseCase';

import { MongoRepository } from '../../context/Members/infrastructure/mongo/repository/MongoRepository';

const mongoRepository = new MongoRepository()

const createNominationUseCase = new CreateNominationUseCase(mongoRepository)
const getAcceptedNominationUseCase = new GetAcceptedNominationUseCase(mongoRepository)

const createNominationController = new CreateNominationController(createNominationUseCase)
const getAcceptedNominationController = new GetAcceptedNominationController(getAcceptedNominationUseCase)

export const router = Router()
router.get("/nomination", getAcceptedNominationController.getAcceptedNom )
router.post("/nomination", createNominationController.createNom )
