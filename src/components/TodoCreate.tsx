import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";

function TodoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");
  const handleCreateTodo = () => {
    if (newTodo.trim().length === 0) {
      alert("todo giriniz");
      return;
    }
    const payload = {
      id: Date.now() + Math.floor(Math.random()),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };
  return (
    <div className="todo-create">
      <input
        value={newTodo}
        placeholder="Todo Giriniz..."
        type="text"
        className="todo-input"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button onClick={handleCreateTodo} className="todo-create-button">
        Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
