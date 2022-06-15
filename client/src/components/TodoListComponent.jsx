import React from "react";
import CreateTaskComponent from "./CreateTaskComponent";
import SortingButtonComponent from "./SortingButtonComponent";


function TodoListComponent() {
  return (
    <div>
      <h3 className='text-center mb-10'>My ToDo List</h3>

      <div className='shadow h-80'>
        <div>
            <SortingButtonComponent />
            <div>
                    
            </div>
        </div>
      </div>
    </div>
  );
}

export default TodoListComponent;
