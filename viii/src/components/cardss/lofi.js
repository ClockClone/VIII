import React from "react";
import Lofi from "../../assets/QuasLofi.png";
import "../cards.css";

function lofi() {
	return (
		<div>
			<div className="card-container">
				<img src={Lofi} alt="keeps me riding" />
				<div className="card">
					<h1>
						I change lofi stations once every few weeks but the main channel
						that I listen to is called steezyasfuck.
					</h1>
				</div>
			</div>
		</div>
	);
}

export default lofi;
