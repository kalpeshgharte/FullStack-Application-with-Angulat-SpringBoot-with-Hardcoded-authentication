import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

export class HelloWorldBean {
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodo(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    // console.log("executeHelloWroldBeanService")
   }

   deleteTodo(username , id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
   }

   retrieveTodo(username , id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
   }

   updateTodo(username , id, todo){
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, todo);
   }

   createTodo(username , todo){
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos`, todo);
   }

}
