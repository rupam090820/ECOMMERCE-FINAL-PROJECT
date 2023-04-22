import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContactManagerComponent } from './component/contact-manager/contact-manager.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { ViewContactComponent } from './component/view-contact/view-contact.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
//for routing
import { RouterModule } from '@angular/router';
//for reactive form
import { ReactiveFormsModule } from '@angular/forms';
//for services
import { HttpClientModule } from '@angular/common/http';
// for 2 way data binding ( for add data its mean post method)
import { FormsModule } from '@angular/forms';

//
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';


@NgModule({
  declarations: [
    ContactComponent,
    NavbarComponent,
    ContactManagerComponent,
    AddContactComponent,
    EditContactComponent,
    ViewContactComponent,
    SpinnerComponent,
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
   
  ]
})
export class ContactModule { }
