import React from "react";
import {
	FaTh,
	FaUserAlt,
	FaRegChartBar,
	FaShoppingBag,
	FaThList,
	FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const sidebar = ({ children }) => {
	const menuItem = [
		{
			path: "/",
			name: "",
			icon: <FaTh />,
		},
		{
			path: "/about",
			name: "About",
			icon: <FaUserAlt />,
		},
		{
			path: "/analytics",
			name: "Analytics",
			icon: <FaRegChartBar />,
		},
		{
			path: "/product",
			name: "Product",
			icon: <FaShoppingBag />,
		},
		{
			path: "/productlist",
			name: "Product List",
			icon: <FaThList />,
		},
	];

	return (
		<div className="nav-container">
			<div className="sidebar">
				<div className="top_section">
					<h1 className="logo">Logo</h1>
					<div className="bars">
						<FaBars />
					</div>
				</div>
				{menuItem.map((item, index) => (
					<NavLink
						to={item.path}
						key={index}
						className="link"
						activeclassName="active"
					>
						<div className="icon">{item.icon}</div>
						<div className="link_text">{item.name}</div>
					</NavLink>
				))}
			</div>
			<main>{children}</main>
		</div>
	);
};

export default sidebar;
