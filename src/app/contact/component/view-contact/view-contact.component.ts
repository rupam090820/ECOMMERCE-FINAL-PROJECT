import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyContact } from '../../model/myContact';
import { MyGroup } from '../../model/myGroup';
import { ContactService } from '../../services/contact.service';



@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  public contactId: string | null = null;
  public loading: boolean = false;
  public contact: MyContact = {} as MyContact;
  public errorMessage: string | null = null;
  public group: MyGroup = {} as MyGroup;
  constructor(private activetedroute: ActivatedRoute, private contservice: ContactService) { }

  ngOnInit(): void {

    this.activetedroute.paramMap.subscribe((params) => {
      this.contactId = params.get('contactId')
    });


    if (this.contactId) {
      this.loading = true;
      this.contservice.getContacts(this.contactId).subscribe((data: MyContact) => {
        this.contact = data;
        this.loading = false;

        // this.contservice.getGroups(data).subscribe((data2: MyGroup) => {
        //   this.group = data2;
        // });
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })
    }

  }
  public isNotEmtry() {
    return Object.keys(this.contact).length > 0;
  }

}
