import { useState, useEffect } from "react";
import MaterialIcon from "react-google-material-icons";

import { useAtom } from "jotai";
import { appState } from "../state";

function SortingButtonComponent() {

  const [direction, setDirection] = useAtom(appState.direction);
  const [tasks, setTasks] = useAtom(appState.tasks);


  const changeDirection = async () => {
    console.log(direction);
    try {
      const request = await fetch(
        `http://localhost:8080/api/sort?direction=${direction}`);
      const response = await request.json();
      console.log(response);
      setTasks(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    changeDirection();
  }, [direction])

  return (
    <div className="mr-1">
      <div className='text-right relative'>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => {
            setDirection((prevDirection) =>
              prevDirection === "asc" ? "desc" : "asc"
            );
          }}
        >
          <h3 className='inline mr-8'>Sort By Date</h3>
          <div className='absolute top-2 right-1'>
            <MaterialIcon
              icon={direction === "desc" ? "keyboard_arrow_down" : "keyboard_arrow_up"}
              size='120'
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default SortingButtonComponent;
