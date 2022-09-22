import React, { Component } from "react";
import Hero from "./Hero";
import Mainpage from "./Mainpage";
import './Home.css';

class Home extends Component {
	render() {
		return (
			<div className="herospace">
				<Hero className="align-middle" />
				<Mainpage/>
			</div>
		);
	}
}

export default Home;
