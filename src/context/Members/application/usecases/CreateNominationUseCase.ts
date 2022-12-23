import { MemberNomination } from "../../domain/entities/MemberNomination";
import { MemberNominationRepository } from "../../domain/repositories/MemberNominationRepository";
import { NotificationSenderRepository } from "../../domain/repositories/NotificationSenderRepository";
import { ExistNominationService } from "../../domain/services/ExistNominationService";
import { ValidMemberService } from "../../domain/services/ValidMemberService";
import { NotificationSenderService } from "../../domain/services/NotificationSenderService";
import { UseCase } from "./UseCase";

export interface CreateNominationUseCaseRequestDTO {
    emailRef : string, 
    emailNom:string, 
    description: string, 
    communityScore: number, 
    talentScore: number
}

export class CreateNominationUseCase implements UseCase<CreateNominationUseCaseRequestDTO,any> {

    private readonly memberNominationRepository : MemberNominationRepository
    private readonly existNominationService : ExistNominationService
    private readonly validMemberService : ValidMemberService
    private readonly notificationSenderService : NotificationSenderService


    constructor(memberRepository : MemberNominationRepository, notificationRepository : NotificationSenderRepository ) {
        this.memberNominationRepository = memberRepository
        this.existNominationService = new ExistNominationService(memberRepository)
        this.validMemberService = new ValidMemberService(memberRepository)
        this.notificationSenderService = new NotificationSenderService(notificationRepository)
    }

    async run(request : CreateNominationUseCaseRequestDTO): Promise<void> {
                    
        //**Nomination is submitted by a valid/stored member email? 
        // const isMemValid : boolean = await this.validMemberService.run(request.emailRef)
        // if (!isMemValid) throw new Error("Member is not valid")

        //Nomination submitted is already stored?.
        await this.existNominationService.run(request.emailNom)

        // const nomination = new MemberNomination(request)
        const nomination = MemberNomination.create(request)

        //Non-acceptance email is sent depending on acceptance value.
        await this.notificationSenderService.run(nomination)

        //Publication of event member-nomination-creation
 
        await this.memberNominationRepository.save(nomination)
    }
}