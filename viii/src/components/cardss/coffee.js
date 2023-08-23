import React from "react";
import Coffee from "../../assets/coffee.png";

function coffee() {
	return (
		<div>
			<div className="card-container">
				<img src={Coffee} alt="coffee is great" />
				<div className="card">
					<h1>
						Drinking coffee in the morning. Drinking coffee after lunch.
						Drinking coffee before dinner.
					</h1>
				</div>
			</div>
		</div>
	);
}

export default coffee;
