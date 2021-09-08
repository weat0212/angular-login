import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id : 1, description : 'Finish Homework'},
    {id : 2, description : 'Cook'},
    {id : 3, description : 'Tv Series'},
  ]
  // todo = {
  //   id : 1,
  //   description: 'Finish Homework'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
