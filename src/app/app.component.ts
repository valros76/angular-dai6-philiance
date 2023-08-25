import { Component, OnInit } from '@angular/core';
import {Observable, interval} from "rxjs";
import {filter, map, tap, take} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // interval$!: Observable<string>;

  ngOnInit(): void {

    // this.interval$ = interval(1000).pipe(
    //   take(12),
    //   filter(value => value % 3 === 0),
    //   map(filtredValue => filtredValue % 2 === 0 ? `${filtredValue} Valeur paire` : `${filtredValue} Valeur impaire`),
    //   tap(text => this.debugLogger(text))
    // );

  }

  // debugLogger(text: string){
  //   console.log(`DEBUG LOG : ${text}`);
  // }
}