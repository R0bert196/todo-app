package com.server.server.controllers;

import com.server.server.models.tasks.TaskRequestModel;
import com.server.server.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
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
        //TODO
//        return taskService.getTasks();
    }

}
