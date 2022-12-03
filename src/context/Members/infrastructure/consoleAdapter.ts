import { CreateNomination } from "../application/usecases/CreateNomination";
import { GetAcceptedNomination } from "../application/usecases/GetAcceptedNomination";
import { Member } from "../domain/entities/Member";
import { Score } from "../domain/entities/Score";
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

    
    const createNominationUseCase = new CreateNomination(inMemoryNomRepo)
    await createNominationUseCase.run({
        id:1,
        emailReferring:"jane_smith@nova.com",
        emailNominated: "jon@gmail.es",
        description: "Jon is a great professional and leads a very successful BD team",
        communityScore : new Score(6),
        talentScore : new Score(9),
        acceptance: false
    })

    await createNominationUseCase.run({
        id:1,
        emailReferring:"jane_smith@nova.com",
        emailNominated: "victor@gmail.es",
        description: "Victor is a great professional and leads a very successful BD team",
        communityScore : new Score(6),
        talentScore : new Score(4),
        acceptance: false
    })

    await createNominationUseCase.run({
        id:1,
        emailReferring:"jane_smith@nova.com",
        emailNominated: "hector@gmail.es",
        description: "Hector is a great professional and leads a very successful BD team",
        communityScore : new Score(6),
        talentScore : new Score(4),
        acceptance: false
    })

    const getAcceptedNominationUseCase = new GetAcceptedNomination(inMemoryNomRepo)
    const acceptedNoms =  await getAcceptedNominationUseCase.run()
    console.log("All nominations stored: ", inMemoryNomRepo.nominations)
    console.log("All accepted nominations", acceptedNoms)


})()