import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = ''; 
  password: string = ''; 

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
  login() {
    if (this.username && this.password) {
     
    } else {
    }
  }
}
