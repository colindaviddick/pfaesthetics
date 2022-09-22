import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { navBackground: "transparentnav" };
	}
	componentDidMount() {
		document.addEventListener("scroll", () => {
			const backgroundcolor = window.scrollY < 100 ? "transparentnav" : "blacknav";
			this.setState({ navBackground: backgroundcolor });
		});
	}

	render() {
		let navStyle = `navbar navbar-expand-lg bg-transparent ${this.state.navBackground}`;
		return (
			<div className='fixed-top'>
				<nav className={navStyle}>
					<div className='container-fluid'>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNavAltMarkup'
							aria-controls='navbarNavAltMarkup'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
							<div className='navbar-nav'>
								<a className='nav-link' href='/home'>
									Home
								</a>
								<a className='nav-link' href='/gallery'>
									Gallery
								</a>
								<a className='nav-link' href='/about'>
									About
								</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
