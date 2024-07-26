import React, { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";

function Todo({ todoProps }: TodoType) {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(todoProps.content);
  const handleRemoveTodo = () => {
    dispatch(removeTodoById(todoProps.id));
  };
  const handleUpdateTodo = () => {
    const payload = {
      id: todoProps.id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditable(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        padding: "15px",
        borderRadius: "2px",
        marginTop: "25px",
      }}
    >
      {editable ? (
        <input
          className="todo-input"
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{todoProps.content}</div>
      )}

      <div style={{ display: "flex", gap: "5px" }}>
        <IoMdRemoveCircleOutline className="icons" onClick={handleRemoveTodo} />
        {editable ? (
          <FaCheck className="icons" onClick={handleUpdateTodo} />
        ) : (
          <FaRegEdit className="icons" onClick={() => setEditable(!editable)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
