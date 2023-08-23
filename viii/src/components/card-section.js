import React from "react";
import "./cards.css";
import Puppies from "./cardss/puppies";
import Lofi from "./cardss/lofi";
import Coffee from "./cardss/coffee";

function cards() {
	return (
		<div>
			<div className="container">
				<Puppies />
				<Lofi />
				<Coffee />
			</div>
		</div>
	);
}

export default cards;
