import { configureStore } from "@reduxjs/toolkit";
import ValueReducerToolkit from "./ValueReducerToolkit";

const StoreToolkit = configureStore({
	reducer: {
		value: ValueReducerToolkit,
	},
});

export default StoreToolkit;
