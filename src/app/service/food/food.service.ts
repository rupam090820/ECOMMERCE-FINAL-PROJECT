import { Injectable } from '@angular/core';
//import food model
import { foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  //create methode for send  all food details 

  
  getAll():foods[] {  // here food[] is modal its mean getAll methode is a model{food[]} type
    return [
      {
        id: 1,
        name: 'Biriyani',
        cookTime: '20-30 Min',
        price: 120 ,
        star: 4.5,
        imageUrl: '/assets/biriyani.webp',
        tag: ['FastFood', 'Lunch', 'Dinner'],
      },

      {
        id: 2,
        name: 'Burger',
        cookTime: '5-10 Min',
        price: 60,
        star: 4.0,
        imageUrl: '/assets/burger.jpg',
        tag: ['FastFood', 'Hamburger'],
      },

      {
        id: 3,
        name: 'Cake',
        cookTime: '5-10 Min',
        price: 40,
        star: 4.3,
        imageUrl: '/assets/cake.jpg',
        tag: ['Sweet Baked Dessert'],
      },
      {
        id: 4,
        name: 'Drink',
        cookTime: '10-14 Min',
        price: 30,
        star: 5,
        imageUrl: '/assets/drink.jpg',
        tag: ['Soft Drinks'],
      },
      {
        id: 5,
        name: 'Pasta',
        cookTime: '30-35 Min',
        price:11,
        star:4.,
        imageUrl: '/assets/pasta.jpg',
        tag: ['Slow Food', 'Lunch'],
      },
      {
        id: 6,
        name: 'pizza',
        cookTime: '40-55 Min',
        price: 175,
        star:3,
        imageUrl: '/assets/pizza.jpg',
        tag: ['Slow Food', 'Snack'],
      },
      {
        id: 7,
        name: 'sandwich',
        cookTime: '10-15 Min',
        price: 50,
        star: 3.0,
        imageUrl: '/assets/sandwich.jpg',
        tag: ['Snack'],
      },
      {
        id: 8,
        name: 'chiken-pizza',
        cookTime: '40-45 Min',
        price: 250,
        star: '4.2',
        imageUrl: '/assets/chiken-pizza.jpg',
        tag: ['Slow Food', 'Snack'],
      }

    ];
  }

  // search food
  getAllFoodBySearchItem(searchItem:any){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchItem.toLowerCase()))
  }

  //get food by id
  getFoodById(foodId:any){
    return this.getAll().find(item => item.id ==foodId) ?? new foods();
  }

}
