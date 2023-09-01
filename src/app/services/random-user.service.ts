import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {take, tap, map, filter, switchMap} from "rxjs/operators";
import { User } from "../models/user.model";

@Injectable({
    providedIn: "root"
})
export class RandomUserService{
    apiPath: string = "https://randomuser.me/api";
    defaultListLength = 20;
    defaultSeed: string = "angular";
    phpServerPath = "http://192.168.1.19:5500/apprenants";

    constructor(
        private http: HttpClient
    ){}

    getRandomUsersList(listLength: number): Observable<any>{
        const req = `${this.apiPath}/?results=${listLength ?? this.defaultListLength}&nat=fr&seed=${this.defaultSeed}`;
        
        return this.http.get<any>(req);
    }

    getApprenants(): Observable<any>{
        const req = `${this.phpServerPath}`;

        return this.http.get<any>(req);
    }

    getOneUser(firstname: string, lastname: string): Observable<any>{
        const usersList: Observable<any> = this.getRandomUsersList(this.defaultListLength);

        const user = usersList.pipe(
            take(1),
            tap(value => console.log(value)),
            filter(usersList => usersList.results),
            tap(value => console.log(value)),
            filter(results => results.name.first === firstname && results.name.last === lastname),
            tap(value => console.log(value))
        ).subscribe();

        return of({ user });
    }
}