import React, { useState } from "react";
import CreateTaskComponent from "./CreateTaskComponent";
import ModalComponent from "./ModalComponent";
import SortingButtonComponent from "./SortingButtonComponent";


function TodoListComponent() {

  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3 className='text-center mb-10'>My ToDo List</h3>

      <div className='shadow h-80'>
        <div>
            <SortingButtonComponent />
          <div>
              {/* TODO add tasks here        */}
          </div>
          <div>
            <button id="add-task" onClick={() => setIsOpen(true)}>Add Task</button>
            <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoListComponent;
