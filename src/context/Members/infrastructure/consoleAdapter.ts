import { createNomination } from "../application/usecases/createNomination";
import { MemoryRepository } from "./MemoryRepository";

(async () => {

    const inMemoryNomRepo = new MemoryRepository()
    console.log(inMemoryNomRepo.nominations)

    const createNominationUseCase = new createNomination(inMemoryNomRepo)
    await createNominationUseCase.run({
        id:1,
        emailReferring:"novamember@nova.es",
        emailNominated: "jon@gmail.es",
        description: "Jon is a great professional and leads a very successful BD team",
        communityScore : 6,
        talentScore : 9,
        acceptance: false
    })

    console.log(inMemoryNomRepo.nominations)

})()