import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  message : string;
  todos: Todo[]
  // =[
  //   new Todo(1,'Learn Angular',false, new Date()),
  //   new Todo(2,'Become an excellent front developer',false, new Date()),
  //   new Todo(3,'Become a pro developer',false, new Date()),
  //  // {id : 1 , description : 'Learn Angular'},
  //   //{id : 1 , description : 'Learn Angular'},
  //   //{id : 1 , description : 'Learn Angular'},
  //   //{id : 1 , description : 'Learn Angular'}
  // ]
  // todo = {
  //   id : 1,
  //   description : 'Learn Angular'
  // }
  constructor(
    private todoDataService : TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoDataService.retrieveAllTodo('Kalpesh').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    this.todoDataService.deleteTodo('Kalpesh',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} successful!!`;
        this.refreshTodos();
      }
    )
    console.log(`deleteTodo ${id}`);
  }

  updateTodo(id){
    console.log(`updateTodo ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
