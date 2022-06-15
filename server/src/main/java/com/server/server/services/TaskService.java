package com.server.server.services;

import com.server.server.entities.Task;
import com.server.server.models.tasks.TaskRequestModel;
import com.server.server.repositories.TaskRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Objects;

@Service
public class TaskService {

    final
    TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task createTask(TaskRequestModel taskRequestModel) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyy-MM-d");
        Task task = Task.builder()
                .estimatedTime(Long.parseLong(taskRequestModel.getEstimatedTime()))
                .name(taskRequestModel.getName())
                .type(taskRequestModel.getType())
                .limitDate(LocalDate.parse(taskRequestModel.getLimitDate(), formatter))
                .completed(false)
                .build();
        return taskRepository.save(task);
    }

    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    public List<Task> getSortedTasks(String direction) {
        return Objects.equals(direction, "asc") ? taskRepository.findAllSortedAsc() : taskRepository.findAllSortedDesc();
    }

    public void deleteTask(long id) {
        taskRepository.deleteById(id);
    }
}
