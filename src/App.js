// import { createContext, useEffect, useState } from "react";
// import { Provider } from "react-redux";
// import StoreToolkit from "./components/redux-toolkit/StoreToolkit";
// import store from "./components/redux/store";
// import CounterRedux from "./components/screens/redux/CounterRedux";

// import ListUser from "./components/screens/axios/ListUser";
// import ComponentA from "./components/screens/context/ComponentA";
// import ComponentB from "./components/screens/context/ComponentB";
// import ComponentC from "./components/screens/context/ComponentC";
// import Counter from "./components/screens/Counter";
// import TicTacToe from "./components/screens/TicTacToe";
import ToDO from "./components/screens/ToDo";
import Test from "./components/demo/Test";
// import WillUpdate from "./components/screens/WillUpdate";

// export const UserContext = createContext();
// export const EmailContext = createContext();

function App() {
	return (
		<Test />
		//  <div>
		// 	<TicTacToe />
		// <ToDO />
		// 	<Counter />
		// 	<UserContext.Provider value="Sajad">
		// 		<EmailContext.Provider value="example@gmail.com">
		// 			<ComponentA />
		// 			<ComponentB />
		// 			<ComponentC />
		// 		</EmailContext.Provider>
		// 	</UserContext.Provider>
		// 	<ListUser />

		// </div>
		// <Provider store={StoreToolkit}>
		// 	<div>
		// 		<CounterRedux />
		// 	</div>
		// </Provider>
	);
}

export default App;
