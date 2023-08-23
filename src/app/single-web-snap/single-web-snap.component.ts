import { Component, OnInit } from '@angular/core';
import {WebSnap} from "../models/web-snap.model";
import { WebSnapsService } from '../services/web-snaps.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-web-snap',
  templateUrl: './single-web-snap.component.html',
  styleUrls: ['./single-web-snap.component.css']
})
export class SingleWebSnapComponent implements OnInit{
  webSnap!:WebSnap;

  constructor(
    private webSnapsService: WebSnapsService,
    private router: ActivatedRoute
  ){}

  ngOnInit(): void{
    const webSnapId = Number(this.router.snapshot.params["id"]);

    this.webSnap = this.webSnapsService.getWebSnapById(webSnapId);
    console.log(this.webSnap);
  }

  onLike(webSnap: WebSnap){}

}
