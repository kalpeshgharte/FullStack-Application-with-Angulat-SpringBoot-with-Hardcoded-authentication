package com.backend.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.*;

//Controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {

    //GET
    //URI - /hello-world
    //method - "Hello world"
   // @RequestMapping(method= RequestMethod.GET, path = "/hello-world")
    //@GetMapping(path = "/hello-world")
    @GetMapping("/hello-world")
    public String HelloWorld(){
        return  "Hello world";
    }

    @GetMapping("/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        //throw new RuntimeException("Some error has happened! please contact to support");
        return  new HelloWorldBean("Hello world changed");
    }
    //hello-world/path-variable/kalpesh
    @GetMapping("/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldBeanPathVariable(@PathVariable  String name){
        return  new HelloWorldBean(String.format("Hello world, %s", name));
    }


}
