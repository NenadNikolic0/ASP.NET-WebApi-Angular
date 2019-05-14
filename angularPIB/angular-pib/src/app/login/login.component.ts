import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm;

  constructor(private fb: FormBuilder, private loginSvc: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
     password: ['', Validators.required]
    }); 
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  get f() {
    return this.loginForm.controls;
  }

  formSubmit() {   
    let message: String = this.loginSvc.getMessage();
    console.log("Poruka iz servisa:", message);
  }


}
