import PropTypes from "prop-types";
import { deleteTodo, editTodo } from "./store/todoSlice";
import { useDispatch } from "react-redux";
import { Button } from "@chakra-ui/react";
import { memo } from "react";

function TodoItem({ value, id }) {
  const dispatch = useDispatch();
  const onDeleteBtn = () => {
    dispatch(deleteTodo(id));
  };

  const onEditBtn = () => {
    const newText = prompt("Please input new text for todo");

    console.log(newText);

    if (newText.trim() !== "") {
      dispatch(
        editTodo({
          value: newText,
          id,
        })
      );
    }
  };

  return (
    <li id={id}>
      <p>{value}</p>
      <div className="btn-wrapper">
        <Button colorScheme="green" variant="outline" onClick={onEditBtn}>
          Edit
        </Button>
        <Button colorScheme="teal" variant="outline" onClick={onDeleteBtn}>
          Delete
        </Button>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
};

export default memo(TodoItem);
