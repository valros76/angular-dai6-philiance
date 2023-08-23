import { Component, OnInit } from '@angular/core';
import {WebSnap} from "../models/web-snap.model";
import { WebSnapsService } from '../services/web-snaps.service';

@Component({
  selector: 'app-web-snap-list',
  templateUrl: './web-snap-list.component.html',
  styleUrls: ['./web-snap-list.component.css']
})
export class WebSnapListComponent implements OnInit{

  webSnaps!: WebSnap[];

  constructor(
    private webSnapsService: WebSnapsService
  ){}

  ngOnInit(): void {
    this.webSnaps = this.webSnapsService.getAllWebSnaps();
  }
}