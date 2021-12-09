import {
  SET_TODO,
  ADD_TODO,
  SET_EXP,
  DELETE_TODO,
  EDIT_TODO,
  FINISH_EDIT,
} from './actions';
export const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO:
      return { ...state, todo: action.payload };
    case SET_EXP:
      return { ...state, explanation: action.payload };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            title: state.todo,
            exp: state.explanation,
          },
        ],
        todo: '',
        explanation: '',
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_TODO:
      let editingItem = state.todos.find((todo) => todo.id === action.payload);
      console.log(editingItem);
      return {
        ...state,
        isEditing: true,
        EditingID: editingItem.id,
        todo: editingItem.title,
        explanation: editingItem.exp,
      };
    case FINISH_EDIT:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === state.EditingID) {
            return {
              ...todo,
              title: state.todo,
              exp: state.explanation,
            };
          }
          return todo;
        }),
        isEditing: false,
        EditingID: null,
        todo: '',
        explanation: '',
      };
    default:
      return { ...state };
  }
};
