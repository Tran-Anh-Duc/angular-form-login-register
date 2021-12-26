import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

user ={
  email:'',
  password:'',
  confirmPassword:'',
  country:'',
  age:'',
  gender:'',
  phone:''

}



  constructor() { }

  ngOnInit(): void {
  }


  OnSubmit(){
  console.log(this.user)
  }

}
