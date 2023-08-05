import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHandlerServices } from '../shared/services/http-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegistrationForm: any | FormGroup;
  obj: {} | undefined;

  constructor(private fb: FormBuilder, private httpServ: HttpHandlerServices, private router: Router) { }

  ngOnInit(): void {
    this.RegistrationForm = this.fb.group({
      role: new FormControl(),
      fname: this.fb.control('', Validators.required),
      lname: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      contact: this.fb.control('', Validators.required),
      department: this.fb.control('', Validators.required),
      LogIn: this.fb.group({
        userName: this.fb.control('', Validators.required),
        password: this.fb.control('', Validators.required)
      })

    })
  }

  onSubmit() {
    let obj: any;
    obj = this.RegistrationForm.value
    obj.totalleaves = 10;
    obj.approvedleave = 0;
    obj.rejectedleave = 0;
    obj.appliedLeaveData= [];
    obj.statusLeave = 'Pending'
    console.log(obj)

    this.httpServ.postUser(obj).subscribe((param)=>{
      console.log(param)
     })

     this.httpServ.signUpNewUser(this.RegistrationForm.value.LogIn).subscribe((param)=>{
      console.log(param);
      this.router.navigate(['/login'])
     });
  
  }

}
