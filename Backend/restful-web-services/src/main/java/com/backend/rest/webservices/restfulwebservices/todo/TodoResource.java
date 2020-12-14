package com.backend.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoResource {
    @Autowired
    private TodoHardcodedService todoHardcodedService;
    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable  String username) {
        return todoHardcodedService.findAll();
    }
    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable  String username , @PathVariable Long id) {
        return todoHardcodedService.findById(id);
    }
    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username ,@PathVariable Long id){
            Todo todo = todoHardcodedService.deleteById(id);
            if(todo != null){
                return ResponseEntity.noContent().build();
            }
           return ResponseEntity.notFound().build();

    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username ,@PathVariable Long id, @RequestBody Todo todo){
        Todo todoUpdated = todoHardcodedService.saveTodo(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username , @RequestBody Todo todo){
        Todo createdTodo = todoHardcodedService.saveTodo(todo);
        //Location
        //Get current resource url
        ///{id}

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("{/id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
