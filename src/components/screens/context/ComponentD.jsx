import React, { useContext } from "react";
import { EmailContext, UserContext } from "../../../App";

function ComponentD() {
	const name = useContext(UserContext);
	const email = useContext(EmailContext);

	return (
		<div style={{ background: "red" }}>
			<h2>
				name is {name} and email is {email}   D component
			</h2>
		</div>
	);
}

export default ComponentD;
