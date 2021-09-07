import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'AndyWang'
  password = ''

  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  
  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.username === "AndyWang" && this.password === "password") {
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
