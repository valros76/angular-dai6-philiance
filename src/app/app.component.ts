import { Component, OnInit } from '@angular/core';
import { WebSnap } from "./models/web-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myWebSnap!: WebSnap;
  myWebSnapOne!: WebSnap;
  webSnaps!: WebSnap[];

  ngOnInit(): void {

    this.webSnaps = [
      new WebSnap(
        "Webdevoo",
        "Concepteur de sites internet et de boutiques en ligne",
        new Date(),
        60,
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
        "Créteil"
      ),
      new WebSnap(
        "Aux Essences Elfiques",
        "Artisanat et vente de produits à base de cire parfumée",
        new Date(),
        255,
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
      )
    ];

    this.myWebSnap = new WebSnap(
      "Webdevoo",
      "Concepteur de sites internet et de boutiques en ligne",
      new Date(),
      42,
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
      "Créteil"
    );
    this.myWebSnapOne = new WebSnap(
      "Aux Essences Elfiques",
      "Artisanat et vente de produits à base de cire parfumée",
      new Date(),
      29,
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
    );
  }
}