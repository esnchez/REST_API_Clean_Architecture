// import { MemberEmail } from "./MemberEmail";


export type MemberProps = {
    id: string,
    name: string,
    email: string,
}


export class Member {
    public id: string;
    public name: string;
    public email: string;

    constructor( memberProps : MemberProps) {
        this.id = memberProps.id;
        this.name = memberProps.name;
        this.email = memberProps.email;
    }

} 