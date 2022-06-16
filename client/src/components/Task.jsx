// import MaterialIcon, {colorPalette} from "react-google-material-icons";
import MaterialIcon from "material-icons-react";

import { useAtom } from "jotai";
import { appState } from "../state";


function Task({ type, name, limitDate, estimatedTime, id, completed }) {
  const [tasks, setTasks] = useAtom(appState.tasks);
  const [direction] = useAtom(appState.direction);

  const handleDelete = async () => {
    if (completed) {
      alert("Can't delete a completed task!");
      return;
    }
    try {
      const request = await fetch(
        `http://localhost:8080/api/delete?id=${id}&direction=${direction}`
      );
      const response = await request.json();
      setTasks(response);
    } catch (error) {
      console.log(error)
    }
  };

  const handleComplete = async () => {
    if (completed) {
      alert("Task is already marked as completed!");
      return;
    }
    const actualDays = window.prompt(
      "How many days did it take to complete this task?"
    );
    if (!actualDays) return;
    const request = await fetch(
      `http://localhost:8080/api/complete?id=${id}&direction=${direction}&actualDays=${actualDays}`
    );
    const response = await request.json();
    setTasks(response);
  };

  const TODAY = new Date();
  var diffDays = parseInt(
    (new Date(limitDate) - TODAY) / (1000 * 60 * 60 * 24),
    10
  );

  const getBgColor = () => {
    if (completed) {
      return "#00A300";
    }
    if (diffDays <= 1) {
      return "#FF0000";
    } else {
      return "#BFBFBF";
    }
  };

  const getTypeColor = () => {
    if (type === "Work") {
      return "#00FF00";
    } else if (type === "Home") {
      return "#0000FF";
    } else if (type === "Hobby") {
      return "#FFA500";
    }
  };

  const bgColor = getBgColor();
  const typeColor = getTypeColor();

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className='flex gap-2 mt-4 relative h-16 justify-center items-center'
    >
      <div
        style={{ backgroundColor: typeColor }}
        className='text-white rounded-br-md absolute top-0 left-0'
      >
        <p>{type}</p>
      </div>
      <div className='flex mt-2 text-center'>
        <div className='w-56 text-center h-2/4'>
          <p>{name}</p>
        </div>
        <div className='border-l pl-1 w-28 h-2/4'>
          <p>{limitDate}</p>
        </div>
        <div className='border-l pl-1 w-32 h-2/4'>
          <p>{estimatedTime} estimated days</p>
        </div>
        <div className='border-l pl-1 w-28 h-2/4'>
          <p>{diffDays} left days</p>
        </div>
        <div className='border-l pl-1 h-2/4 flex gap-2'>
          <span onClick={handleComplete} className='cursor-pointer'>
            <MaterialIcon icon='done' size='small' color='#00D100' />
          </span>
          <span onClick={handleDelete} className='cursor-pointer'>
            <MaterialIcon icon='delete' size='small' color='#DC143C' />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Task;
