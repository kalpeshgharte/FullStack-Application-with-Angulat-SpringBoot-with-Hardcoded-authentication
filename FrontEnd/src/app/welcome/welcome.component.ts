//import { AppComponent } from '../app.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  welcomeMessageFromService : string;
  //ActivatedRoute
  constructor(private route: ActivatedRoute,
    public service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    //console.log(this.route.snapshot.params['name']);
  }

  getWelcomeMessage(){
     console.log(this.service.executeHelloWroldBeanService());

      this.service.executeHelloWroldBeanService().subscribe(
         //response => console.log(response)
          response => this.handleSuccessfulResponse(response),
          error => this.errorResponseMessage(error)
          );
   
    
  }
  getWelcomeMessageWithPathVariable(){
    console.log(this.service.executeHelloWroldBeanService());

 

    this.service.executeHelloWroldBeanServiceWithPathVariable(this.name).subscribe(
     //response => console.log(response)
     response => this.handleSuccessfulResponse(response),
     error => this.errorResponseMessage(error)
  );
    
   
 }

  handleSuccessfulResponse(response){
      this.welcomeMessageFromService = response.message;
      //console.log(response);
      //console.log(response.message);
  }

  errorResponseMessage(error){
    
     // console.log(error);
      //console.log(error.error);
      //console.log(error.error.message);
      this.welcomeMessageFromService = error.error.message;
      
  }
  

}
