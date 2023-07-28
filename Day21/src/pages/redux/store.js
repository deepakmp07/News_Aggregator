
// import { configureStore } from "@reduxjs/toolkit";

// import userReducer from "./userSlice"

// export default configureStore({
//     reducer : {
//         user:userReducer,
//     }
// })
import { createStore } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

// import { createStore } from "redux";
// import { combineReducers } from 'redux';
// import {configureStore} from '@reduxjs/toolkit';

// const initialState = {
//   username: "",
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_USERNAME":
//       return { ...state, username: action.payload };
//     default:
//       return state;
//   }
// };

// const Reducer = combineReducers({
//   username: reducer,
// });

// const store = configureStore(Reducer);

// export default store;
