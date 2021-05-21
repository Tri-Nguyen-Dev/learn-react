import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodo } from "./redux/todoSlice";


function App() {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])


  function handleAddTodo() {
    dispatch(addTodo('JAVA'))
  }

  return (

    <div className="App">
      <button onClick={handleAddTodo}>Thêm</button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>{todo.title}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
