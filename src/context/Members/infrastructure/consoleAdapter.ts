import { CreateNomination } from "../application/usecases/CreateNomination";
import { GetAcceptedNomination } from "../application/usecases/GetAcceptedNomination";
import { Member } from "../domain/entities/Member";
import { InMemoryRepository } from "./InMemoryRepository";

(async () => {

    const inMemoryNomRepo = new InMemoryRepository()
    console.log(inMemoryNomRepo.nominations)
    console.log(inMemoryNomRepo.members)


    const mem1 : Member = {
        id: "3",
        name: "Jane",
        email: "jane_smith@nova.com",
    }
    inMemoryNomRepo.members.push(mem1)

    console.log("members: ",inMemoryNomRepo.members)

    
    const createNominationUseCase = new CreateNomination(inMemoryNomRepo)
    await createNominationUseCase.run(
        "jane_smith@nova.com",
        "jon@gmail.es",
        "Jon is a great professional and leads a very successful BD team",
        6,
        9
    )

    await createNominationUseCase.run(
        "jane_smith@nova.com",
        "jon@gmail.es",
        "Jon is a great professional and leads a very successful BD team",
        6,
        9
    )

    await createNominationUseCase.run(
        "jane_smith@nova.com",
        "jon@gmail.es",
        "Jon is a great professional and leads a very successful BD team",
        6,
        9
    )

    const getAcceptedNominationUseCase = new GetAcceptedNomination(inMemoryNomRepo)
    const acceptedNoms =  await getAcceptedNominationUseCase.run()
    console.log("All nominations stored: ", inMemoryNomRepo.nominations)
    console.log("All accepted nominations", acceptedNoms)
})()