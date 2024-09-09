import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import { nanoid } from "nanoid";

function Form() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmitClick = (e) => {
    e.preventDefault();
    console.log(value);

    const formData = {
      value,
      id: nanoid(),
    };

    if (value.trim() !== "") {
      dispatch(addTodo(formData));
    }

    setValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmitClick} action="">
        <Input
          placeholder="Type some text.."
          size="lg"
          value={value}
          onChange={onInputChange}
        />
        <Button colorScheme="teal" size="lg" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
}

export default Form;
