import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = ''; 
  password: string = ''; 

  constructor(private location: Location) {}

  contactUs() {

  }

  aboutUs() {

  }

  openFacebookPage() {
    
  }

  openTwitterPage() {
  
  }

  openInstagramPage() {
  }

  goBack() {
    this.location.back();
  }

  login() {
    if (this.username && this.password) {
    } else {
     
    }
  }
}
