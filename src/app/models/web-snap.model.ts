export class WebSnap{
    id!: number;
    title!:string;
    description!:string;
    createdDate!: Date;
    likes!:number;
    imageUrl!:string;
    likeBtnClass!: string;
    isLiked!: boolean;
    location?:string;

    // constructor(
    //     public id: number,
    //     public title: string,
    //     public description: string,
    //     public createdDate: Date,
    //     public likes: number,
    //     public imageUrl: string,
    //     public location?: string
    // ){
    //     this.likeBtnClass = "like-cta";
    //     this.isLiked = false;
    // }

}