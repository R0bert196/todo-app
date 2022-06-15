package com.server.server.services;

import com.server.server.entities.Task;
import com.server.server.models.tasks.TaskRequestModel;
import com.server.server.repositories.TaskRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Service
public class TaskService {

    final
    TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task createTask(TaskRequestModel taskRequestModel) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyy/MM/d");
        Task task = Task.builder()
                .estimatedTime(Long.parseLong(taskRequestModel.getEstimatedTime()))
                .taskName(taskRequestModel.getTaskName())
                .type(taskRequestModel.getType())
                .limitDate(LocalDate.parse(taskRequestModel.getLimitDate(), formatter))
                .build();
        return taskRepository.save(task);
    }
}
