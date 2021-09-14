import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private todoService: TodoDataService,
    private router: Router
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

  addTodo() {
    this.router.navigate(['todos', -1])
    console.log(`Create New Todo`);
  }

  deleteTodo(id: number) {
    console.log(`Delete Todo: ${id}`);
    this.todoService.deleteTodo('AndyWang', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: number) {
    console.log(`Update of Todo ${id} Successful!`);
    this.router.navigate(['todos', id]);
  }
}
