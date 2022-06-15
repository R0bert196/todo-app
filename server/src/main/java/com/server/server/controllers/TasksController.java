package com.server.server.controllers;

import com.server.server.models.tasks.TaskRequestModel;
import com.server.server.services.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "http://localhost:3000/")
public class TasksController {

    final
    TaskService taskService;

    public TasksController(TaskService taskService) {
        this.taskService = taskService;
    }


    @PostMapping("api/add-task")
    public ResponseEntity<?> addTask(@RequestBody TaskRequestModel taskRequestModel) {
        if (taskService.createTask(taskRequestModel) == null) {
            return new ResponseEntity<>("Failed to add task", HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok(taskService.getTasks());
    }


    @GetMapping("/api/get-tasks")
    public ResponseEntity<?> getTasks() {
        return ResponseEntity.ok(taskService.getTasks());
    }

}
