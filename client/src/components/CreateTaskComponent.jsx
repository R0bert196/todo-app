import { useState } from "react";
import { useAtom } from "jotai";
import { appState } from "../state";

const defaulFormFields = {
  type: "",
  taskName: "",
  limitDate: "",
  estimatedTime: "",
};

const currentDate = new Date().toLocaleDateString("en-ca");



function CreateTaskComponent() {

  const [formFields, setFormFields] = useState(defaulFormFields);

  const [tasks, setTasks] = useAtom(appState.tasks);


  const { type, taskName, limitDate, estimatedTime } = formFields;


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formFields);
    const response = await fetch("http://localhost:8080/api/add-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        formFields
      }
    });
    console.log(response.data);
  }

  // setTasks(response.data);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex gap-3'>
          <div>
            <label>
              Task Type:
              <select onChange={handleChange} name='type' value={type}>
                <option>Hobby</option>
                <option>Home</option>
                <option>Work</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Task Name:
              <input
                type='text'
                onChange={handleChange}
                name='taskName'
                value={taskName}
              />
            </label>
          </div>
          <div>
            <label>
              Limit Date:
              <input
                type='date'
                onChange={handleChange}
                name='limitDate'
                value={limitDate}
                min={currentDate}
              />
            </label>
          </div>
          <div>
            <label>
              Estimated Days:
              <input
                type='number'
                onChange={handleChange}
                name='estimatedTime'
                value={estimatedTime}
                min='1'
              />
            </label>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default CreateTaskComponent;
