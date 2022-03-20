import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{
    constructor(){}

    public isAuthenticated():boolean{
        return Math.floor(Math.random() * 100) % 2!==0;
    }
}