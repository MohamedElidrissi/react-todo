import React, { useReducer } from "react";
import uuid from "uuid";
import TodoContext from "./todoContext";
import TodoReducer from "./todoReducer";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETE,
  FETCH_TODOS
} from "../actionTypes";

const initialState = {
  todos: []
};

const TodoState = props => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Add todo
  const addTodo = title =>
    dispatch({
      type: ADD_TODO,
      payload: {
        id: uuid.v4(),
        title,
        completed: false
      }
    });

  // Delete todo
  const deleteTodo = id =>
    dispatch({
      type: DELETE_TODO,
      payload: id
    });

  // Toggle complete
  const toggleComplete = id =>
    dispatch({
      type: TOGGLE_COMPLETE,
      payload: id
    });

  // Fetch todos
  const fetchTodos = async () => {
    const todos = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=30"
    ).then(res => res.json());
    dispatch({ type: FETCH_TODOS, payload: todos });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        toggleComplete,
        fetchTodos
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
