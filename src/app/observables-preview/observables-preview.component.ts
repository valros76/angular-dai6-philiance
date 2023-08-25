import { Component, Input, OnInit } from '@angular/core';
import { ObservablesPreview } from '../models/observables-preview.model';

@Component({
  selector: 'app-observables-preview',
  templateUrl: './observables-preview.component.html',
  styleUrls: ['./observables-preview.component.css']
})
export class ObservablesPreviewComponent implements OnInit{

    @Input() observablesPreview!: ObservablesPreview;

    ngOnInit(): void{
      this.observablesPreview.launchObservableMethod(this.observablesPreview.observableType);
    }
}
