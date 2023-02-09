// import { nanoid } from "nanoid";
import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/noteReducer";
const noteContext = createContext();
const initialValue = {
  showAddNote: false,
  newColor: "",
  notes: [],
};
export const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const addNote = (value) => {
    console.log(value);
    dispatch({
      type: "ADD_NOTE",
      payload: value,
    });
  };
  const deleteNote = (id) => {
    dispatch({
      type: "DELETE_NOTE",
      payload: id,
    });
  };
  const updateNote = (id, value) => {
    dispatch({
      type: "UPDATE_NOTE",
      payload: { id, value },
    });
  };
  const readyForUpdate = (id) => {
    console.log(id);
    dispatch({
      type: "READY_FOR_UPDATE",
      payload: id,
    });
  };
  const changeShowAddNote = (color) => {
    dispatch({
      type: "CHANGE_SHOW_ADD_NOTE",
      payload: color,
    });
  };
  return (
    <noteContext.Provider
      value={{
        ...state,
        addNote,
        deleteNote,
        updateNote,
        readyForUpdate,
        changeShowAddNote,
      }}
    >
      {children}
    </noteContext.Provider>
  );
};

export const useNoteContext = () => {
  return useContext(noteContext);
};
