import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux-toolkit/ValueReducerToolkit";

function CounterRedux() {
	const [value, setValue] = useState([]);
	const valueRedux = useSelector((state) => {
		return state.value;
	});

	const dispatch = useDispatch();

	for (let i = 0; i < 10; i++) {
		console.log(i);
		let result = i;
		value[i] = result + 1;
	}

	console.log(value.slice(value.length - 5), "valueRedux");
	return (
		<div>
			<button
				onClick={() => {
					// setValue((prev) => prev + 1);
					dispatch(increment());
				}}
			>
				increment
			</button>
			{valueRedux}
			<button
				onClick={() => {
					// setValue((prev) => prev - 1);
					dispatch(decrement());
				}}
			>
				decrement
			</button>
		</div>
	);
}

export default CounterRedux;
