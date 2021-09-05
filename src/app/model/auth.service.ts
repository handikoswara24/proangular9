import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AuthService{
    constructor(private dataSource : RestDataSource){

    }

    get authenticated() : boolean {
        return this.dataSource.authToken != null;
    }

    clear(){
        this.dataSource.authToken = null;
    }

    authenticate(username: string, password: string) : Observable<boolean>{
        return this.dataSource.authenticate(username, password);
    }
}