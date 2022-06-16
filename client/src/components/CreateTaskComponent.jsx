import { useState } from "react";
import { useAtom } from "jotai";
import { appState } from "../state";

const defaulFormFields = {
  type: "Hobby",
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
    const stringData = JSON.stringify(formFields);
    try {
      const request = await fetch("http://localhost:8080/api/add-task", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: stringData
      
      });
      const response = await request.json();
      closeModal();
      setTasks(response);
    } catch (error) {
      console.log(error);
    }  
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex gap-5'>
          <div>
            <label>
              Type:
              <select className="border px-2" required onChange={handleChange} name='type' value={type}>
                <option>Hobby</option>
                <option>Home</option>
                <option>Work</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Name:
              <input
                className="border pl-2"
                type='text'
                required
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
                className="border w-32 px-2"
                type='date'
                required
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
                className="border w-32 pl-2"
                type='number'
                required
                onChange={handleChange}
                name='estimatedTime'
                value={estimatedTime}
                min='1'
              />
            </label>
          </div>
        </div>
        <div className="text-right mt-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default CreateTaskComponent;
