import React from "react";
import "../cards.css";
import DoberPupps from "../../assets/Doberman-Puppies.png";

function puppies() {
	return (
		<div>
			<div className="card-container">
				<img src={DoberPupps} alt="puppies <3" />
				<div className="card">
					<h1>
						Planning to adopt a Doberman soon. Reason being, want a guardian
						deity not a dog.
					</h1>
				</div>
			</div>
		</div>
	);
}

export default puppies;
