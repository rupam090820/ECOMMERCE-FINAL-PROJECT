import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { ContactManagerComponent } from './component/contact-manager/contact-manager.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { ViewContactComponent } from './component/view-contact/view-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  
  { path: 'contacts/admin', component: ContactManagerComponent,canActivate:[AuthGuard] },//canActivate:[AuthGuard]
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/edit/:contactId', component: EditContactComponent },
  { path: 'contacts/view/:contactId', component: ViewContactComponent },
  {path:'AdminLogin',component:LoginComponent},
  {path:'AdminSignup',component:SignupComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
