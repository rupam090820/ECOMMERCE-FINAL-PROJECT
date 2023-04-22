import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from '../../model/myContact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  public loading: boolean = false; // for loading screen
  public contactsVariable: any[] = [];  // for get methode we store here all the data
  public errorMessage: string | null = null;
  public name: any;  // for search
  p:number=1;  // for pagination

  constructor(private cantService: ContactService,private route:Router) { }

  ngOnInit(): void {

    this.getAllContactData();
  }
  getAllContactData() {
    this.loading = true;
    this.cantService.getAllContact().subscribe((data: any) => {
      this.contactsVariable = data;
      this.loading = false;

    }, (error) => {
      this.errorMessage = error;
      this.loading = false;
    });
  }

  //delete contact
  deletcontacts(contactId: any | undefined) {
    if (contactId) {
      this.cantService.deleteContacts(contactId).subscribe(() => {
        this.getAllContactData();
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      });
    }
  }

  // search portion
  search(){
    if(this.name == ""){
      this.ngOnInit();
    }
    else{
      this.contactsVariable = this.name.filter((res:any)=>{
return res.name.toLocalLowerCase().match(this.name.toLocalLowerCase());
      })
    }
  }
  Logout(){
    localStorage.clear();
    alert('LogOut Sucessfully!!');
    this.route.navigateByUrl('/AdminLogin');
  }
}
