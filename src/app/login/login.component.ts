import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  // Router
  // Angular.giveMeRouter
  // Dependency Injection
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.username === "AndyWang" && this.password === "password") {
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
