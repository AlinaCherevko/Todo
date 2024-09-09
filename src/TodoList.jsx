import { useSelector } from "react-redux";
import { todoSelector } from "./store/todoSelectors";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todo } = useSelector(todoSelector);
  console.log(todo);

  return (
    <>
      {todo.length > 0 ? (
        <h1>My todo List</h1>
      ) : (
        <h1>Add some to your todo list</h1>
      )}
      <ul>
        {todo.length > 0 &&
          todo.map(({ value, id }) => (
            <TodoItem key={id} id={id} value={value} />
          ))}
      </ul>
    </>
  );
}

export default TodoList;
