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

  // Init validation property values 
  public formFieldsErrors = {
    "emptyEmail": false,
    "invalidEmail": false,
    "emptyPassword": false
  }

  constructor(private fb: FormBuilder, private loginSvc: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Getter for form controls
  get f() {
    return this.loginForm.controls;
  }

  formSubmit() {
    let message: String = this.loginSvc.getMessage();
    console.log("Poruka iz servisa:", message);
  }


  checkFieldValidity(fieldType) {
    // Check if field is email
    if (fieldType == 'email') {
      if (!this.f.email.value || String(this.f.email.value).trim() == '') {
        this.formFieldsErrors.emptyEmail = true;
      }

      else {

        // Set emptyEmail validation property to false
        this.formFieldsErrors.emptyEmail = false;

        // Regular expression for checking email format
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // Check if email is in regular format, if not set property invalidEmail to true 
        if (!emailRegex.test(String(this.f.email.value).toLowerCase())) {
          this.formFieldsErrors.invalidEmail = true;
        }

        else {
          // Set invalidEmail validation property to false
          this.formFieldsErrors.invalidEmail = false;

        }

      }

    }

    // If field is password
    else {
      // Check if password is empty 
      if (!this.f.password.value || String(this.f.password.value).trim() == '') {
        // Set emptyPassword validation property to true 
        this.formFieldsErrors.emptyPassword = true;
      }

      else {
        // Set emptyPassword validation property to false
        this.formFieldsErrors.emptyPassword = false;
      }
    }
  }


  // Reset form fields validation properties
  resetFormValidation() {
    this.formFieldsErrors.emptyEmail = false;
    this.formFieldsErrors.emptyPassword = false;
    this.formFieldsErrors.invalidEmail = false;
  }


}
