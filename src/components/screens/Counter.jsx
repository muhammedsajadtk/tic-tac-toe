import React, { useEffect, useState } from 'react'
import WillUpdate from './WillUpdate';

function Counter() {

    const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	const [isAvailable, setAvailable] = useState(true);

	useEffect(() => {
		// console.log("count", count);
		// return () => {
		// 	console.log("kkk");
		// };
	}, [count]);
  return (


    <div>
        <div>
			{/* <TicTacToe /> */}
			{/* <ToDO /> */}
			{isAvailable && <WillUpdate />}
			<button
				onClick={() => {
					setAvailable((prev) => !prev);
				}}
			>
				Active
			</button>
			<h1>{count}</h1>
			<input
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					setCount((prev) => prev + 1);
				}}
			>
				increment
			</button>
		</div>
    </div>
  )
}

export default Counter