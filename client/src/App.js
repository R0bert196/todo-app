import TodoListComponent from "./components/TodoListComponent";

function App() {
  return (
    <div className='App'>
      <div className='w-1/3 mx-auto mt-24'>
        <h2 className='text-right mb-20'>Robert Chiriac</h2>
        <TodoListComponent />
      </div>
    </div>
  );
}

export default App;
