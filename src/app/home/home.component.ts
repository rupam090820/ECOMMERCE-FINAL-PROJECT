import { Component, OnInit } from '@angular/core';
//inject services 
import { FoodService } from '../service/food/food.service';
//import food model
import { foods } from '../shared/model/food';

//import StarRatingComponent here for star pattern in website but first go to app.module.ts file
import { StarRatingComponent } from 'ng-starrating/public-api';

//import activated route for search
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   foods: foods[] = [];  // for store all food image which bring by services and its a food model type of data
  constructor(private fs: FoodService, private activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foods = this.fs.getAllFoodBySearchItem(params['searchItem'])
      }
      else {
        this.foods = this.fs.getAll();
      }
    })
  }

  ngOnInit(): void {
  
  }

}
