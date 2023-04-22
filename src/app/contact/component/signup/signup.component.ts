import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators ,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { PassValidationv } from '../../CustomValidation/CustomValidation';
import { signup } from '../../user/signup';
import { LoginApiService } from '../../user/login-api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
// for signup
public newuser: any = [];




constructor(private Loginapi: LoginApiService,private route:Router,private fb:FormBuilder) {
  //this.newuser = new signup('rupam','rupams441@gmail.com','aA1@aaaa','aA1@aaaa');
  this.newuser = new signup('', '', '');
}


// create  reactive form
myform: any = [];

ngOnInit(): void {
this.myform = this.fb.group({
  'uname': [, [Validators.required, Validators.pattern('^[a-zA-Z]{3,12}$')]],
  'email': [, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
  'pass1': [, [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
  'cpass': [, [Validators.required,PassValidationv, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
})
}

public get uname() {
return this.myform.get('uname') as FormControl;
}
public get email() {
return this.myform.get('email') as FormControl;
}

public get pass1() {
return this.myform.get('pass1') as FormControl;
}

public get cpass() {
return this.myform.get('cpass') as FormControl;
}

// signup  if we use json server

SignUp(){
  // console.log(this.newuser);
 
  this.Loginapi.signup(this.myform.value).subscribe((res:any)=>{
    console.log(res);
   
    alert('SignUp Successfully');
    this.route.navigateByUrl('/AdminLogin');
    
    },(err:any)=> {
    alert('sorry!!!,please try again');
  });
  }

}
