import React, { useEffect, useState } from "react";

function WillUpdate() {
	const [x, setX] = useState("");

	useEffect(() => {
		// console.log("add");

		return () => {
			console.log("remove");
		};
	}, []);

	return <div>zzz</div>;
}

export default WillUpdate;
