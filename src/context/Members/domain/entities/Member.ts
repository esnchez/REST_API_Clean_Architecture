import { v4 as uuid } from "uuid";

interface MemberProps {
    id: string,
    name: string,
    email: string,
    role: Role 
}

enum Role {
    Member = 'MEMBER',
    Admin = 'ADMIN'
}

export class Member implements MemberProps {
    public id: string;
    public name: string;
    public email: string;
    public role: Role

    constructor( name : string, email:string, role? : Role) {
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.role = role ?? Role.Member
    }
} 