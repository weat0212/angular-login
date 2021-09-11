import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  messageFromService:string = ''
  username = ''

  // ActivatedRoute
  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username']
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.username).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    // console.log('last line of getWelcomeMessage')
  }
  
  handleSuccessfulResponse(response:HelloWorldBean) {
    this.messageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error: any): void {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.messageFromService = error.message
  }
}
