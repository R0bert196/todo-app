package com.server.server.entities;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Task {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE
    )
    private long id;
    private String type;
    private String name;
    private LocalDate limitDate;
    private long estimatedTime;
    private boolean completed;

}
