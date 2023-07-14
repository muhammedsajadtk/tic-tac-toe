// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

function appReducer(prevState = initialState, action) {
	switch (action.type) {
		case "increment":
			return prevState + 1;
		case "decrement":
			return prevState - 1;
		default:
			return prevState;
	}
}

const store = createStore(appReducer);
// const store = configureStore({
// 	reducer: appReducer,
// });

export default store;
