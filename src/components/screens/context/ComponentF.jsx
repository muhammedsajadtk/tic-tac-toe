import React from "react";
import { UserContext, EmailContext } from "../../../App";

function ComponentF() {
	return (
		<UserContext.Consumer>
			{(user) => (
				<EmailContext.Consumer>
					{(email) => (
						<div>
							<h1>
								My name is {user} and my email is {email}
							</h1>
						</div>
					)}
				</EmailContext.Consumer>
			)}
		</UserContext.Consumer>
	);
}

export default ComponentF;
