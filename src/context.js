import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer';
import {
  SET_TODO,
  ADD_TODO,
  SET_EXP,
  DELETE_TODO,
  EDIT_TODO,
  FINISH_EDIT,
  CLOSE_LOADING,
  CLOSE_MODAL,
  SET_URGENCY,
} from './actions';

const AppContext = React.createContext();

const initialState = {
  todo: '',
  explanation: '',
  urgency: 0,
  todos: [],
  isLoading: false,
  alert: { show: false, status: '', msg: '' },
  isEditing: false,
  EditingID: null,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setTodo = (query) => {
    dispatch({ type: SET_TODO, payload: query });
  };

  const setExp = (exp) => {
    dispatch({ type: SET_EXP, payload: exp });
  };

  const setUrgency = (num) => {
    dispatch({ type: SET_URGENCY, payload: num });
  };

  const addTodo = () => {
    const id = Math.random();
    dispatch({ type: ADD_TODO, payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const editTodo = (id) => {
    dispatch({ type: EDIT_TODO, payload: id });
  };

  const finishEdit = () => {
    dispatch({ type: FINISH_EDIT });
  };

  const closeLoading = () => {
    dispatch({ type: CLOSE_LOADING });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setTodo,
        addTodo,
        setExp,
        deleteTodo,
        editTodo,
        finishEdit,
        closeLoading,
        closeModal,
        setUrgency,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
