import { useState } from "react";
import { useAtom } from "jotai";
import { appState } from "../state";

const defaulFormFields = {
  type: "",
  name: "",
  limitDate: "",
  estimatedTime: "",
};

const currentDate = new Date().toLocaleDateString("en-ca");



function CreateTaskComponent({ closeModal }) {

  const [formFields, setFormFields] = useState(defaulFormFields);

  const [tasks, setTasks] = useAtom(appState.tasks);


  const { type, name, limitDate, estimatedTime } = formFields;


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formFields);
    const stringData = JSON.stringify(formFields);
    console.log(stringData);
    try {
      const request = await fetch("http://localhost:8080/api/add-task", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: stringData
      
      });
      const response = await request.json();
      closeModal();
      console.log(response)
      setTasks(response);
    } catch (error) {
      console.log(error);
    }  
  }


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
                name='name'
                value={name}
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
