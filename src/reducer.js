import {
  SET_TODO,
  ADD_TODO,
  SET_EXP,
  DELETE_TODO,
  EDIT_TODO,
  FINISH_EDIT,
  CLOSE_LOADING,
  CLOSE_MODAL,
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
        isLoading: true,
        alert: {
          show: true,
          status: 'success',
          msg: 'Todo Added Succesfully.',
        },
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        isLoading: true,
        alert: {
          show: true,
          status: 'danger',
          msg: 'Todo is deleted',
        },
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
        isEditing: true,
        EditingID: null,
        todo: '',
        explanation: '',
        alert: {
          show: true,
          status: 'success',
          msg: 'Todo is updated',
        },
      };
    default:
      return { ...state };
    case CLOSE_LOADING:
      return { ...state, isLoading: false };
    case CLOSE_MODAL:
      return {
        ...state,
        alert: {
          show: false,
          status: '',
          msg: '',
        },
      };
  }
};
