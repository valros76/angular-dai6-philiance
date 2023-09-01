import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import { WebSnap } from '../models/web-snap.model';
import {map, tap} from "rxjs/operators";
import { WebSnapsService } from '../services/web-snaps.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-web-snap',
  templateUrl: './new-web-snap.component.html',
  styleUrls: ['./new-web-snap.component.css']
})
export class NewWebSnapComponent implements OnInit{

  webSnapForm!: FormGroup;
  webSnapPreview$!: Observable<WebSnap>;
  urlRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private webSnapsService: WebSnapsService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&\/=]*)/;

    this.webSnapForm = this.formBuilder.group({
      title: ["test", Validators.required],
      description: ["test", Validators.required],
      imageUrl: ["https://placehold.co/1920x1080/png", {
        validators: [Validators.required, Validators.pattern(this.urlRegex)],
        updateOn: "change"
      }],
      location: [null]
    });

    this.webSnapPreview$ = this.webSnapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id: 1,
        createdDate: new Date(),
        likes: 0,
        likeBtnClass: "like-cta",
        isLiked: false
      }))
    );
  }

  onSubmitForm(): void{
    this.webSnapsService.addWebSnap(this.webSnapForm.value).pipe(
      tap(webSnap => this.router.navigateByUrl("/websnaps"))
    ).subscribe();
    
  }

}
