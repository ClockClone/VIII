import "./body.css";
import "../App.css";
import React from "react";
import Title from "../components/title";
import Bio from "../components/bio";
import CardSection from "../components/card-section";
import Web from "../components/spiderweb";

export default function body() {
	return (
		<>
			<>
				<Web />
				<Bio />
				<CardSection />
			</>
		</>
	);
}
