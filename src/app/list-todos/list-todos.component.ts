import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] | undefined;

  message: string | undefined;

  // Class
  // todos = [
  //   new Todo(1, 'Finish Homework', false, new Date()),
  //   new Todo(2, 'Cook', false, new Date()),
  //   new Todo(3, 'Tv Series', false, new Date())
  // ]

  // List Component
  // todos = [
  //   {id : 1, description : 'Finish Homework'},
  //   {id : 2, description : 'Cook'},
  //   {id : 3, description : 'Tv Series'},
  // ]

  // todo = {
  //   id : 1,
  //   description: 'Finish Homework'
  // }

  constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('AndyWang').subscribe(
      res => {
        console.log(res);
        this.todos = res;
      }
    )
  }

  deleteTodo(id:number) {
    console.log(`Delete Todo: ${id}`);
    this.todoService.deleteTodo('AndyWang', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      } 
    )
  }
}
