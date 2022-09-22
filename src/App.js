import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Footer from "./Footer";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Navbar></Navbar>
			<Routes>
				{/* <Route path='/about' element={<About />}></Route> */}
				<Route path='/home' element={<Home />}></Route>
				<Route path='/gallery' element={<Gallery/>}></Route>
				<Route path='/about' element={<About />}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
