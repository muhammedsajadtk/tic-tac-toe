import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseConfig } from "../../../axiosConfig";

function ListUser() {
	const [users, setUsers] = useState([]);
	const [cart, setCart] = useState([]);

	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	// useEffect(() => {
	// 	axios
	// 		.get("https://reqres.in/api/users", {
	// 			params: {
	// 				page: 2,
	// 			},
	// 		})
	// 		.then(function (response) {
	// 			// handle success
	// 			// console.log(response.data.data);
	// 			// setUsers(response.data.data);
	// 		})
	// 		.catch(function (error) {
	// 			// handle error
	// 			console.log(error);
	// 		});

	// 	axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
	// 		console.log("posts:", res.data);
	// 	});

	// 	baseConfig.get("/comments").then((res) => {
	// 		console.log("comments:", res.data);
	// 	});
	// }, []);

	const listCart = () => {
		axios.get("https://fakestoreapi.com/carts/").then((res) => {
			console.log("cart:", res.data);
			setCart(res.data);
		});
	};

	useEffect(() => {
		listCart();
	}, []);

	const sub = (id) => {
		axios
			// .post("https://fakestoreapi.com/carts", {
			.post("https://fakestoreapi.com/auth/login", {
				// userId: id,
				// date: "2020 - 02 - 03",
				// products: JSON.stringify([
				// 	{ productId: 5, quantity: 1 },
				// 	{ productId: 1, quantity: 5 },
				// ]),
				username: name,
				password: password,
			})
			.then(function (response) {
				console.log(response);
				listCart();
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div>
			<h2>ListUser</h2>
			{/* {users.map((item, i) => (
				<div key={item.id}>
					<h5>{item.first_name}</h5>
					<img src={item.avatar} alt="img" />
					<a href={`mailto:${item.email}`}>{item.email}</a>
				</div>
			))} */}
			{cart.map((item, i) => (
				<h1 key={i}>{item.id}</h1>
			))}

			<input
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<input
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>

			<div
				onClick={() => {
					// sub(cart.length + 1);
					sub();
				}}
			>
				update
			</div>
		</div>
	);
}

export default ListUser;
