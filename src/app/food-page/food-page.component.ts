import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
// import { CartService } from '../service/cart.service';

import { FoodService } from '../service/food/food.service';
import { foods } from '../shared/model/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  FOOD!:foods  // declare a variable and set its a foods type veriable here data type is food( foods mean food service type data type)
  constructor(activatedRoute:ActivatedRoute, private api:FoodService,  private router:Router,private cartService:CartService) {
    activatedRoute.params.subscribe((item) => {
      if(item['id']){
        this.FOOD= api.getFoodById(item['id'])
      }
    })
   }

  ngOnInit(): void {
  }
//add to cart button code
addToCart(){
this.cartService.addToCart(this.FOOD);
this.router.navigateByUrl('/cart-page');
}

}
