import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ToDO = () => {
	const [items, setItems] = useState([]);
	const [filteredArray, setFilteredArray] = useState([]);
	const [inputValue, setInputValue] = useState("");

	//search
	const [search, setSearch] = useState("");

	const removeItem = (id) => {
		let new_items = items.filter((item) => item.id !== id);
		setItems(new_items);
	};

	const renderItem = () => {
		return filteredArray.map((item) => (
			<li key={item.id}>
				{item.title}{" "}
				<button
					onClick={() => {
						removeItem(item.id);
					}}
				>
					delete
				</button>
			</li>
		));
	};

	const updateItem = () => {
		let new_value = {
			id: items.length,
			title: inputValue,
		};
		if (inputValue) {
			setItems([...items, new_value]);
			setInputValue("");
		}
	};

	useEffect(() => {
		if (search) {
			let searchArray = items.filter((val) =>
				val.title.toLowerCase().includes(search.toLowerCase())
			);
			console.log(searchArray);
			setFilteredArray(searchArray);
		} else {
			setFilteredArray(items);
		}
	}, [search, items]);

	return (
		<div>
			<h2>My ToDo</h2>
			<input
				placeholder="search iyems"
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
				}}
			/>

			<ul>{renderItem()}</ul>
			<input
				placeholder="new item"
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					updateItem();
				}}
			>
				Add new
			</button>
			{/* <FirstDiv id="one">
				<h2
					onClick={() => {
						window.location.replace("/#two");
					}}
				>
					Two
				</h2>
			</FirstDiv>
			<SecondDiv id="two" />
			<ThirdDiv id="three" /> */}
		</div>
	);
};

export default ToDO;

const FirstDiv = styled.div`
	height: 500px;
	width: 100%;
	background-color: red;
`;
const SecondDiv = styled.div`
	height: 500px;
	width: 100%;
	background-color: green;
`;
const ThirdDiv = styled.div`
	height: 500px;
	width: 100%;
	background-color: yellow;
`;
