import React, { useEffect, useState } from "react";
import ModalComponent from "./ModalComponent";
import SortingButtonComponent from "./SortingButtonComponent";

import { useAtom } from "jotai";
import { appState } from "../state";
import Task from "./Task";

function TodoListComponent() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useAtom(appState.tasks);

  const renderCardsOnMount = async () => {
    try {
      const request = await fetch("http://localhost:8080/api/get-tasks");
      const response = await request.json();
      console.log(response);
      setTasks(response);
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    renderCardsOnMount();
  }, [])


  return (
    <div>
      <h3 className='text-center mb-10'>My ToDo List</h3>
      <div style={{ minHeight: "320px" }} className='shadow relative'>
        <div>
          <div>
            <SortingButtonComponent />
          </div>
          <div className='mt-8'>
            {tasks?.map((task, index) => {
              return (
                <Task
                  key={index}
                  type={task.type}
                  name={task.name}
                  limitDate={task.limitDate}
                  estimatedTime={task.estimatedTime}
                  id={task.id}
                  completed={task.completed}
                />
              );
           })}
          </div>
          <div className='absolute bottom-4 right-4'>
            <button id='add-task' onClick={() => setIsOpen(true)}>
              Add Task
            </button>
          </div>
          <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
}

export default TodoListComponent;
