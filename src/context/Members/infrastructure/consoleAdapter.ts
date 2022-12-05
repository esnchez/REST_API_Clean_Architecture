import { CreateNominationUseCase } from "../application/usecases/CreateNominationUseCase";
import { GetAcceptedNominationUseCase } from "../application/usecases/GetAcceptedNominationUseCase";
import { Member } from "../domain/entities/Member";
import { InMemoryRepository } from "./InMemoryRepository";

(async () => {

    const inMemoryNomRepo = new InMemoryRepository()
    console.log(inMemoryNomRepo.nominations)
    console.log(inMemoryNomRepo.members)


    const mem1 : Member = new Member("Jane", "jane_smith@nova.com")
    inMemoryNomRepo.members.push(mem1)

    console.log("members: ",inMemoryNomRepo.members)

    
    const createNominationUseCase = new CreateNominationUseCase(inMemoryNomRepo)
    await createNominationUseCase.run({
        emailRef:"jane_smith@nova.com",
        emailNom: "hector@gmail.es",
        description: "Hector is a great professional and leads a very successful BD team",
        communityScore : 6,
        talentScore : 4,
    })

    await createNominationUseCase.run({
        emailRef:"jane_smith@nova.com",
        emailNom: "hector@gmail.es",
        description: "Hector is a great professional and leads a very successful BD team",
        communityScore : 6,
        talentScore : 4,
    })

    await createNominationUseCase.run({
        emailRef:"jane_smith@nova.com",
        emailNom: "hector@gmail.es",
        description: "Hector is a great professional and leads a very successful BD team",
        communityScore : 6,
        talentScore : 4,
    })

    const getAcceptedNominationUseCase = new GetAcceptedNominationUseCase(inMemoryNomRepo)
    const acceptedNoms =  await getAcceptedNominationUseCase.run()
    console.log("All nominations stored: ", inMemoryNomRepo.nominations)
    console.log("All accepted nominations", acceptedNoms)


})()