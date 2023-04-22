import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';
import { ContactModule } from './contact/contact.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//import bellow routing module for activated children routing file
import { ContactRoutingModule } from './contact/contact-routing.module';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full' },
  {path:'home',component:HomeComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'food/:id',component:FoodPageComponent},
  {path:'cart-page',component:CartPageComponent},
 
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
   {path:'**',component:PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ContactRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
