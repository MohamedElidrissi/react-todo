import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETE,
  FETCH_TODOS
} from "../actionTypes";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [action.payload, ...state.todos]
      };
    case DELETE_TODO:
      return {
        todos: [...state.todos.filter(todo => todo.id !== action.payload)]
      };
    case TOGGLE_COMPLETE:
      return {
        todos: [
          ...state.todos.map(todo => {
            if (action.payload === todo.id) {
              todo.completed = !todo.completed;
            }
            return todo;
          })
        ]
      };
    case FETCH_TODOS:
      return {
        todos: [...action.payload]
      };
    default:
      return state;
  }
};
