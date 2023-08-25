import { Component, OnInit } from '@angular/core';
import {ObservablesPreview} from "../models/observables-preview.model";

@Component({
  selector: 'app-observables-exemples',
  templateUrl: './observables-exemples.component.html',
  styleUrls: ['./observables-exemples.component.css']
})
export class ObservablesExemplesComponent implements OnInit{

  observableMergeMap!: ObservablesPreview;
  observableConcatMap!: ObservablesPreview;
  observableExhaustMap!: ObservablesPreview;
  observableSwitchMap!: ObservablesPreview;

  ngOnInit(): void{
    this.observableMergeMap = new ObservablesPreview(
      "Exemple mergeMap",
      "💻",
      "🧙‍♂️",
      "Launch 💻",
      "Launch 🧙‍♂️",
      "💻 vs 🧙‍♂️",
      "mergeMapExemple"
    );

    this.observableConcatMap = new ObservablesPreview(
      "Exemple concatMap",
      "💻",
      "🧙‍♂️",
      "Launch 💻",
      "Launch 🧙‍♂️",
      "💻 vs 🧙‍♂️",
      "concatMapExemple"
    );

    this.observableExhaustMap = new ObservablesPreview(
      "Exemple ExhaustMap",
      "💻",
      "🧙‍♂️",
      "Launch 💻",
      "Launch 🧙‍♂️",
      "💻 vs 🧙‍♂️",
      "exhaustMapExemple"
    );

    this.observableSwitchMap = new ObservablesPreview(
      "Exemple SwitchMap",
      "💻",
      "🧙‍♂️",
      "Launch 💻",
      "Launch 🧙‍♂️",
      "💻 vs 🧙‍♂️",
      "switchMapExemple"
    );
  }

}
