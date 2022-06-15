package com.server.server.models.tasks;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TaskRequestModel {

    private String type;
    private String taskName;
    private String limitDate;
    private String estimatedTime;

}
