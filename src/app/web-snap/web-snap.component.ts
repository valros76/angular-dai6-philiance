import { Component, OnInit, Input } from '@angular/core';
import {WebSnap} from "../models/web-snap.model";
import { WebSnapsService } from '../services/web-snaps.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-web-snap',
  templateUrl: './web-snap.component.html',
  styleUrls: ['./web-snap.component.css']
})
export class WebSnapComponent implements OnInit{
  @Input() webSnap!: WebSnap;

  constructor(
    public webSnapsService: WebSnapsService,
    private router: Router
  ){}

  ngOnInit(): void{
  }

  onViewWebSnap(): void{
    this.router.navigateByUrl(`websnaps/${this.webSnap.id}`);
  }

  onLike(): void{
    switch(this.webSnap.isLiked){
      case true:
        this.webSnapsService.likeWebSnapById(this.webSnap.id, "unlike");
      break;
      case false:
      default:
        this.webSnapsService.likeWebSnapById(this.webSnap.id, "like");
      break;
    }
  }

}