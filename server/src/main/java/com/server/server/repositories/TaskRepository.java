package com.server.server.repositories;

import com.server.server.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    @Query(value = "select * FROM Task order by limit_date asc", nativeQuery = true)
    List<Task> findAllSortedAsc();


    @Query(value = "select * FROM task order by limit_date desc ", nativeQuery = true)
    List<Task> findAllSortedDesc();
}
