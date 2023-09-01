import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../services/random-user.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import {take, tap, map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users$!:Observable<User[]>;

  constructor(
    private randomUserService: RandomUserService
  ) { }

  ngOnInit(): void {
    this.users$ = this.randomUserService.getRandomUsersList(this.randomUserService.defaultListLength).pipe(
      map(usersList => usersList.results),
    );
    
    this.randomUserService.getApprenants().pipe(
      take(1),
      tap(value=>console.table(value))
    ).subscribe();
  }

}
