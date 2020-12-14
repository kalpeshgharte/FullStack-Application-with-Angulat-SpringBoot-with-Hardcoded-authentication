import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})


export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }


  executeHelloWroldBeanService(){
   return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
   // console.log("executeHelloWroldBeanService")
  }

  //http://localhost:8080/hello-world/path-variable/kalpesh
  executeHelloWroldBeanServiceWithPathVariable(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    // console.log("executeHelloWroldBeanService")
   }
}
