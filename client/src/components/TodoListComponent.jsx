import React, { useState } from "react";
import ModalComponent from "./ModalComponent";
import SortingButtonComponent from "./SortingButtonComponent";

import { useAtom } from "jotai";
import { appState } from "../state";
import Task from "./Task";

function TodoListComponent() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [tasks] = useAtom(appState.tasks);

  return (
    <div>
      <h3 className='text-center mb-10'>My ToDo List</h3>
      <div style={{minHeight: "320px"}} className='shadow relative'>
        <div>
          <div>
            <SortingButtonComponent />
          </div>
          <div className='mt-8'>
            {/* TODO add tasks here        */}
            <Task />
            <Task />
          </div>
          <div className="absolute bottom-4 right-4">
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
