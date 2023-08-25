import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.css']
})
export class CatFactComponent implements OnInit{
  @Input() catFact!: any;

  ngOnInit(): void{
  }
}
