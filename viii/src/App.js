import Body from "./pages/body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Sidebar />
			<Routes>
				<Route path="/" element={<Body />}></Route>
				<Route path="/" element={<Body />}></Route>
				<Route path="/" element={<Body />}></Route>
				<Route path="/" element={<Body />}></Route>
				<Route path="/" element={<Body />}></Route>
				<Route path="/" element={<Body />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
