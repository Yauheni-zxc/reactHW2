
import TodoList from "./components/TodoList";
import TemperatureConverter from "./components/TemperatureConverter";

function App() {
  return (
    <div className="App">
      <TemperatureConverter />{" "}
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
