import { Component, OnInit, Input } from '@angular/core';
import {WebSnap} from "../models/web-snap.model";

@Component({
  selector: 'app-web-snap',
  templateUrl: './web-snap.component.html',
  styleUrls: ['./web-snap.component.css']
})
export class WebSnapComponent implements OnInit{
  @Input() webSnap!: WebSnap;

  ngOnInit(): void{
  }

  onLike(): void{
    switch(this.webSnap.isLiked){
      case true:
        this.webSnap.likes--;
        this.webSnap.likeBtnClass = "like-cta";
        this.webSnap.isLiked = false;
      break;
      case false:
      default:
        this.webSnap.likes++;
        this.webSnap.likeBtnClass = "like-cta-active";
        this.webSnap.isLiked = true;
      break;
    }
  }

}