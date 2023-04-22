import { foods } from "./model/food";

export class CartItem{
  itemPrice:any=0;
    constructor(food:foods){
      this.food = food;  
    }
    food:foods;
    quantity:number = 1;

    get price():number{
        this.itemPrice= this.food.price * this.quantity;
        return this.itemPrice ;
    }
}