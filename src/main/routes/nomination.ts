import { CreateNominationController, GetAcceptedNominationController } from '../controllers';
import { Router} from 'express';
import { CreateNominationUseCase } from '../../context/Members/application/usecases/CreateNominationUseCase';
import { GetAcceptedNominationUseCase } from '../../context/Members/application/usecases/GetAcceptedNominationUseCase';
import { MongoRepository } from '../../context/Members/infrastructure/mongo/repository/MongoRepository';
import { Emailer } from '../../context/Members/infrastructure/senders/Emailer';
import { isAdmin } from '../middleware/auth';

const mongoRepository = new MongoRepository()
const emailer = new Emailer()

const createNominationUseCase = new CreateNominationUseCase(mongoRepository, emailer)
const getAcceptedNominationUseCase = new GetAcceptedNominationUseCase(mongoRepository)

const createNominationController = new CreateNominationController(createNominationUseCase)
const getAcceptedNominationController = new GetAcceptedNominationController(getAcceptedNominationUseCase)

export const router = Router()
router.get("/nomination", isAdmin, getAcceptedNominationController.getAcceptedNom )
router.post("/nomination", createNominationController.createNom )
