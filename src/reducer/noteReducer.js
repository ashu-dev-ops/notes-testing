import { nanoid } from "nanoid";
// import React from "react";

const NoteReducer = (state, action) => {
  console.log("hi");
  if (action.type === "ADD_NOTE") {
    const { bgColor, text } = action.payload;
    const newNote = {
      id: nanoid(),
      text: text,
      bgColor: bgColor,
      data: Date.now(),
    };
    console.log(newNote);
    return { ...state, notes: [...state.notes, newNote] };
  }
  if (action.type === "DELETE_NOTE") {
    const newNotes = state.notes.filter((i) => i.id !== action.payload);
    return { ...state, notes: newNotes };
  }
  if (action.type === "UPDATE_NOTE") {
    const { id, value } = action.payload;
    let findNote = state.notes.map((n) => {
      if (n.id === id) {
        return { ...n, text: value, update: false };
      } else {
        return n;
      }
    });
    console.log(findNote);

    return {
      ...state,
      notes: findNote,
    };
  }
  if (action.type === "READY_FOR_UPDATE") {
    console.log("reducer runnung fine");
    // const { id } = action.payload;
    let findNote = state.notes.map((n) => {
      if (n.id === action.payload) {
        console.log(n.text);
        return { ...n, update: true };
      } else {
        return n;
      }
    });
    // console.log(findNote);

    return {
      ...state,
      notes: findNote,
    };
  }
  if (action.type === "CHANGE_SHOW_ADD_NOTE") {
    if (state.showAddNote === true) {
      return {
        ...state,
        showAddNote: false,
      };
    }
    if (state.showAddNote === false) {
      console.log("heeeeeeeeeee");
      return {
        ...state,
        showAddNote: true,
        newColor: action.payload,
      };
    }
  }
  return state;
};

export default NoteReducer;
