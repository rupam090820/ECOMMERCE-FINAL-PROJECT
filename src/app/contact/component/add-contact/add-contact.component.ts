import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PassValidationv } from '../../CustomValidation/CustomValidation';
import { MyContact } from '../../model/myContact';

import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  myform: any = [];

  //for add 
  public loading: boolean = false;
  public contact: MyContact = {} as MyContact;
  public errorMessage: string | null = null;







  constructor(private fb: FormBuilder, private contactservice: ContactService, private router: Router) {
    this.myform = this.fb.group({
      'name': [, [Validators.required, Validators.pattern('^[a-zA-Z]{3,12}$')]],
      'email': [, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      //for altranative email
      'altEmail': this.fb.array([]),
      'mob': [, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      'pass': [, [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
      'cpass': [, [Validators.required, PassValidationv, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
      'salary': [, [Validators.required, Validators.minLength(5), Validators.maxLength(7), Validators.pattern('[0-9]{5,7}')]],
      'photo': [, Validators.required],

      //for nested or complex form
      'address': this.fb.group({
        'state': [, [Validators.required]],
        'city': [, [Validators.required]],
        'pincode': [, [Validators.required, Validators.minLength(5), Validators.maxLength(7), Validators.pattern('[0-9]{5,7}')]],
      }),

    });
  }

  public get name() {
    return this.myform.get('name') as FormControl;
  }
  public get email() {
    return this.myform.get('email') as FormControl;
  }
  public get altEmail() {
    return this.myform.get('altEmail') as FormArray;
  }
  public get mob() {
    return this.myform.get('mob') as FormControl;
  }
  public get pass() {
    return this.myform.get('pass') as FormControl;
  }
  public get cpass() {
    return this.myform.get('cpass') as FormControl;
  }
  public get salary() {
    return this.myform.get('salary') as FormControl;
  }
  public get photo() {
    return this.myform.get('photo') as FormControl;
  }
  // for complex form
  public get state() {
    return this.myform.get('address').get('state') as FormControl;
  }
  public get city() {
    return this.myform.get('address').get('city') as FormControl;
  }
  public get pincode() {
    return this.myform.get('address').get('pincode') as FormControl;
  }
  ngOnInit(): void {


  }




  // //state decleare staticallly
  public stateWiseCity: any = [
    { 'state': 'WB', 'city': ['Kolkata', 'Holdia'] },
    { 'state': 'Maharastra', 'city': ['Mumbai', 'Pune'] },
    { 'state': 'Gujrat', 'city': ['Surat', 'GhandiNagar'] },
  ];
  public citylist: any = [];
  forstate() {
    let selectedstate = this.state.value;
    console.log('it is a state value:--', selectedstate);
    this.stateWiseCity.forEach((item: any) => {
      if (item.state == selectedstate) {
        this.citylist = item.city;
      }
    });
  }

  send() {  // submit button or add new contact or post methode
    // console.log(this.myform.value);
    this.contactservice.CreateContacts(this.contact).subscribe((data: any) => {
      this.router.navigate(['contacts/admin']).then();
    }, (error) => {
      this.errorMessage = error;
      this.router.navigate(['/contacts/add']).then();
    })
    this.myform.reset();
    alert("SUBMIT SUCCESSFULLY")
  }



  //for ALTRANATIVE EMAIL
  public static count: number = 1;
  addemail() {
    if (AddContactComponent.count <= 2) {
      this.altEmail.push(this.fb.control('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]))
    }
    else {
      alert('Maximum limit exceeds.....!');
      AddContactComponent.count--;
    }
    AddContactComponent.count++;
  }


  removeEmails(i: number) {
    this.altEmail.removeAt(i);
    AddContactComponent.count--;
    alert("email removed");
  }
}
