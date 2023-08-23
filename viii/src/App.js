import Body from "./pages/body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Sidebar />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
