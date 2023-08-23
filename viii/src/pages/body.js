import "./body.css";
import React from "react";
import Title from "../components/title";
import Bio from "../components/bio";
import CardSection from "../components/card-section";
import Web from "../components/spiderweb";
import Sidebar from "../components/sidebar";

export default function body() {
	return (
		<div>
			<div>
				<Web />
				<Bio />
				<CardSection />
			</div>
		</div>
	);
}
