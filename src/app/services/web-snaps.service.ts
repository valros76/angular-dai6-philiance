import { Injectable } from "@angular/core";
import { WebSnap } from "../models/web-snap.model";

@Injectable({
    providedIn: "root"
})
export class WebSnapsService {
    webSnaps: WebSnap[] = [
        {
            id: 1,
            title: "Webdevoo",
            description: "Concepteur de sites web et boutiques en ligne",
            createdDate: new Date(),
            likes: 352,
            imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
            likeBtnClass: "like-cta",
            isLiked: false,
            location: "Créteil"
        },
        {
            id: 2,
            title: "Aux Essences Elfiques",
            description: "Artisanat et vente de produits à base de cire parfumée",
            createdDate: new Date(),
            likes: 182,
            imageUrl: "https://images.unsplash.com/photo-1651841689094-dc8afc5341cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=570&q=80",
            likeBtnClass: "like-cta",
            isLiked: false
        }
    ];

    getAllWebSnaps(): WebSnap[]{
        return this.webSnaps;
    }

    getWebSnapById(webSnapId: number): WebSnap{
        const webSnap = this.webSnaps.find(webSnap => Number(webSnap.id) === Number(webSnapId));
        if(!webSnap){
            throw new Error("Ce WebSnap n'existe pas !");
        }else{
            return webSnap;
        }
    }

    onLike(webSnap: WebSnap): void {
        switch (webSnap.isLiked) {
            case true:
                webSnap.likes--;
                webSnap.likeBtnClass = "like-cta";
                webSnap.isLiked = false;
                break;
            case false:
            default:
                webSnap.likes++;
                webSnap.likeBtnClass = "like-cta-active";
                webSnap.isLiked = true;
                break;
        }
    }

    likeWebSnapById(webSnapId: number, likeType: "like" | "unlike"): void{
        const webSnap = this.getWebSnapById(webSnapId);

        if(webSnap){
            if(likeType === "like"){
                webSnap.likes++;
                webSnap.likeBtnClass = "like-cta-active";
                webSnap.isLiked = true;
            }else{
                webSnap.likes--;
                webSnap.likeBtnClass = "like-cta";
                webSnap.isLiked = false;
            }
        }else{
            throw new Error("Ce WebSnap n'existe pas !");
        }
    }
}