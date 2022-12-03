import { createNominationController, getAcceptedNominationController } from '../controllers';
import { Router} from 'express';


export const router = Router()
router.get("/nomination", getAcceptedNominationController )
router.post("/nomination", createNominationController )
