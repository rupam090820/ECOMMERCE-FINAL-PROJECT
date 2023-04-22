export class foods{
    id!:number;
    price!:number;
    name!:string;
   
    star!:any;
    tag?:string[];
    imageUrl!:string;
    cookTime!:string;
 

}
// here use ! symbol because in angular 13 rule is if you create any thing then at first you should create constructor and under constuctor we define all things but here i dont create constructor thats why here i use ! symbol
