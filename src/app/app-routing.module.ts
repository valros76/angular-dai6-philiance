import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { WebSnapListComponent } from "./web-snap-list/web-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleWebSnapComponent } from "./single-web-snap/single-web-snap.component";

const routes: Routes = [
    {
        path: "",
        component: LandingPageComponent
    },
    {
        path: "websnaps",
        component: WebSnapListComponent
    },
    {
        path:"websnaps/:id",
        component: SingleWebSnapComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}