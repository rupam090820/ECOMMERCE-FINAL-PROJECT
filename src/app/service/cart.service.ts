import { Injectable } from '@angular/core';
import { Cart } from '../shared/Cart';
import { CartItem } from '../shared/Cartitem';
import { foods } from '../shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(food: foods):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.food.id != foodId);
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}