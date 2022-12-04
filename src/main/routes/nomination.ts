import { CreateNominationController, GetAcceptedNominationController } from '../controllers';
import { Router} from 'express';
import { CreateNomination } from '../../context/Members/application/usecases/CreateNomination';
import { GetAcceptedNomination } from '../../context/Members/application/usecases/GetAcceptedNomination';

import { MongoRepository } from '../../context/Members/infrastructure/mongo/repository/MongoRepository';

const mongoRepository = new MongoRepository()

const createNominationUseCase = new CreateNomination(mongoRepository)
const getAcceptedNominationUseCase = new GetAcceptedNomination(mongoRepository)

const createNominationController = new CreateNominationController(createNominationUseCase)
const getAcceptedNominationController = new GetAcceptedNominationController(getAcceptedNominationUseCase)

export const router = Router()
router.get("/nomination", getAcceptedNominationController.getAcceptedNom )
router.post("/nomination", createNominationController.createNom )
