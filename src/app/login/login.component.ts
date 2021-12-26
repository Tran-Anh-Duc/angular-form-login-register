import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators,} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup|any;



  constructor() {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.maxLength(5)]),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

  onSubmit(){
    console.log(this.loginForm)
  }

}
