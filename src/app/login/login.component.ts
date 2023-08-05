import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHandlerServices } from '../shared/services/http-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  LoginForm: any | FormGroup;

  constructor(private fb: FormBuilder, private httpServ: HttpHandlerServices, private router: Router) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      userName: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    })
  }

  onSubmit() {
    this.httpServ.signInCurrentUser(this.LoginForm.value).subscribe((param : any)=>{
      console.log(param);

      this.httpServ.getUsers().subscribe((userdata : any)=>{

        let foundUser = false;

        for(let user of userdata){
          if(user.LogIn.userName === this.LoginForm.value.userName && user.LogIn.password === this.LoginForm.value.password && user.role === "HOD"){
            foundUser = true;
          this.router.navigate(['/hod-dash'])
          }
          if (user.LogIn.userName === this.LoginForm.value.userName && user.LogIn.password === this.LoginForm.value.password && user.role === "staff") {
            foundUser = true;
            this.router.navigate(['/staff-dash'])
            this.httpServ.fullname = user.fname + ' ' + user.lname;
            this.httpServ.username = user.LogIn.userName;
            return
          }
        }
        if (!foundUser) {
          alert('Invalid username or password. Please try again.');
        }
      })
      
    })

  }
}
