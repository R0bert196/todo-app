package com.server.server.controllers;

import com.server.server.models.tasks.TaskRequestModel;
import com.server.server.services.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "http://localhost:3000")
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

    @GetMapping("/api/sort")
    public ResponseEntity<?> getSortedTasks(@RequestParam String direction) {
        return ResponseEntity.ok(taskService.getSortedTasks(direction));
    }

    @GetMapping("/api/delete")
    public ResponseEntity<?> deleteTask(@RequestParam long id, @RequestParam String direction) {
        taskService.deleteTask(id);
        return ResponseEntity.ok(taskService.getSortedTasks(direction));
    }

    @GetMapping("/api/complete")
    public ResponseEntity<?> completeTask(@RequestParam long id, @RequestParam String direction, @RequestParam long actualDays) {
        taskService.completeTask(id, actualDays);
        return ResponseEntity.ok(taskService.getSortedTasks(direction));
    }
}
