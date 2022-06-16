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
  };

  useEffect(() => {
    renderCardsOnMount();
  }, []);

  return (
    <div>
      <h2 className='text-center mb-10 font-bold text-xl'>My ToDo List</h2>
      <div
        style={{ height: "400px" }}
        className='shadow border overflow-x-auto'
      >
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
        </div>
      </div>
      <div className='text-right mt-4'>
        <button
          className='bg-blue-600 text-white px-4 py-2 rounded'
          onClick={() => setIsOpen(true)}
        >
          Add Task
        </button>
      </div>
      <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default TodoListComponent;
