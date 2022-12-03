import { createNomination } from "../application/usecases/createNomination";
import { Member } from "../domain/entities/Member";
import { MemoryRepository } from "./MemoryRepository";

(async () => {

    const inMemoryNomRepo = new MemoryRepository()
    console.log(inMemoryNomRepo.nominations)
    console.log(inMemoryNomRepo.members)


    const mem1 : Member = {
        id: 3,
        name: "Jane",
        email: "jane_smith@nova.com",
    }
    inMemoryNomRepo.members.push(mem1)

    console.log("members: ",inMemoryNomRepo.members)

    
    const createNominationUseCase = new createNomination(inMemoryNomRepo)
    await createNominationUseCase.run({
        id:1,
        emailReferring:"jane_smith@nova.com",
        emailNominated: "jon@gmail.es",
        description: "Jon is a great professional and leads a very successful BD team",
        communityScore : 6,
        talentScore : 7,
        acceptance: false
    })

    console.log(inMemoryNomRepo.nominations)

})()