import { useState } from "react";
import "./styles.css";
import {InputTodo} from  "./components/InputTodo";
import {IncompleteTodos} from  "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
  ]);

  const [completeTodos, setCompleteTodos] = useState([
    "todoでした1",
    "todoでした2",
  ]);

  const onChangeText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newImcompleteTodos = [...incompleteTodos];
    newImcompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newImcompleteTodos);
  };

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newImcompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newImcompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeText} 
        onClick={onClickAdd} 
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
        <p style={{color: "red"}}>
        登録は5こまでだよ〜
        </p>
        )
      }
      <IncompleteTodos 
        todos = {incompleteTodos} 
        onClickComplete={onClickComplete}
        onClickDelete = {onClickDelete}
      />
      <CompleteTodos
      todos={completeTodos} 
      onClickReturn={onClickReturn} 
      />
    </>
  );
};
