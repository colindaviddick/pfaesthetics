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
				<Route exact path='/home' element={<Home />}></Route>
				<Route exact path='/gallery' element={<Gallery/>}></Route>
				<Route exact path='/about' element={<About />}></Route>
				<Route exact path='/' element={<Home />}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
