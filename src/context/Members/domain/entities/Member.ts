import { v4 as uuid } from "uuid";

interface MemberProps {
    id: string,
    name: string,
    email: string,
}

export class Member implements MemberProps {
    public id: string;
    public name: string;
    public email: string;

    constructor( name : string, email:string,) {
        this.id = uuid();
        this.name = name;
        this.email = email;
    }
} 