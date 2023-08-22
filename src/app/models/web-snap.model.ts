export class WebSnap{
likeBtnClass: string;
isLiked: boolean;

    constructor(
        public title: string,
        public description: string,
        public createdDate: Date,
        public likes: number,
        public imageUrl: string,
        public location?: string
    ){
        this.likeBtnClass = "like-cta";
        this.isLiked = false;
    }

}