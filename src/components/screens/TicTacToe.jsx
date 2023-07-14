// import logo from "./logo.svg";
// import "../../App.css";
import styled from "styled-components";
import { useState } from "react";

function TicTacToe() {
	const [value, setValue] = useState(["", "", "", "", "", "", "", "", ""]);
	const [player, setPlayer] = useState(1);
	const [win, setWin] = useState("");

	// update array

	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const calculateWinner = (value) => {
		for (let i = 0; i < lines.length; i++) {
			let [a, b, c] = lines[i];
			if (
				value[a] !== "" &&
				value[a] == value[b] &&
				value[a] == value[c]
			) {
				if (value[a] === "X") {
					setWin(`Player 1 win`);
					return value[a];
				} else {
					setWin(`Player 2 win`);
					return value[a];
				}
			} else if (!value.includes("")) {
				setWin(`Match is Draw`);
			}
		}
		return null;
	};

	const updateArray = (i) => {
		if (player === 1) {
			value[i] = "X";
			setPlayer(2);
		} else {
			value[i] = "O";
			setPlayer(1);
		}
		calculateWinner(value);
	};

	const reset = () => {
		setWin("");
		setPlayer(1);
		setValue(["", "", "", "", "", "", "", "", ""]);
	};

	return (
		<div className="App">
			<div>
				<h1>TIC TAC TOE</h1>
			</div>
			<GameSection>
				<GameBody>
					{value.map((item, i) => (
						<Box
							key={i}
							onClick={() => {
								if (!item && !win) {
									setTimeout(() => {
										updateArray(i);
									}, 100);
								}
							}}
						>
							<Label>{item}</Label>
						</Box>
					))}
				</GameBody>
			</GameSection>
			{win && <WinText>{win}</WinText>}

			<Title>Player 1 = X</Title>
			<Title>Player 2 = O</Title>
			<button
				onClick={() => {
					reset();
				}}
			>
				Reset
			</button>
		</div>
	);
}

export default TicTacToe;

const GameSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 50px 0;
`;
const GameBody = styled.section`
	height: 300px;
	width: 300px;
	background-color: #fff;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;
const Box = styled.div`
	height: 100px;
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid;
	:hover {
		cursor: pointer;
	}
`;
const Label = styled.p`
	color: #000;
	font-size: 32px;
`;
const Title = styled.h3`
	color: green;
	font-size: 28px;
`;
const WinText = styled.h3`
	color: yellow;
	font-size: 38px;
`;
