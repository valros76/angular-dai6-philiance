import { Component, OnInit } from '@angular/core';
import {ObservablesPreview} from "../models/observables-preview.model";

@Component({
  selector: 'app-observables-exemples',
  templateUrl: './observables-exemples.component.html',
  styleUrls: ['./observables-exemples.component.css']
})
export class ObservablesExemplesComponent implements OnInit{

  observableMergeMap!: ObservablesPreview;

  ngOnInit(): void{
    this.observableMergeMap = new ObservablesPreview(
      "Exemple mergeMap",
      "💻",
      "🧙‍♂️",
      "Launch 💻",
      "Launch 🧙‍♂️",
      "💻 vs 🧙‍♂️",
      "mergeMapObservable"
    );
  }

}
