import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {take, tap} from "rxjs/operators";
import {NgForm} from "@angular/forms";

@Component({
    selector: "app-landing-page",
    templateUrl: "landing-page.component.html",
    styleUrls: ["landing-page.component.css"]
})
export class LandingPageComponent implements OnInit{

    catFacts$!: Observable<any>;
    userEmail: string = "text@mail.fr";

    constructor(
        private router: Router,
        private http: HttpClient
    ){}

    ngOnInit(): void{
        this.catFacts$ = this.http.get("https://cat-fact.herokuapp.com/facts");
        this.catFacts$.pipe(
            take(1),
            tap(datas => console.log(datas))
        ).subscribe();
    }

    onContinue(): void{
        this.router.navigateByUrl("websnaps");
    }

    onSubmitForm(form: NgForm): void{
        console.log(form.value);
    }
}