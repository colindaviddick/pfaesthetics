import React, { Component } from "react";
import "./About.css";

class About extends Component {
	render() {
		return (
			<div className='pagespan'>
				<div className='container text-start'>
					<h1 className='heading text-center text-uppercase bump'>
						PF Aesthetic
					</h1>
					<div className='row'>
						<div className='col-4'>
							<img
								src='https://picsum.photos/800/1200'
								alt=''
								className='img-fluid rounded'
							/>
						</div>
						<div className='col-8'>
							<h2>Heading</h2>
							<p className='fs-3'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
								magni voluptatem impedit, vitae eum aliquam inventore sunt ex
								eaque.
							</p>
							<h2>Heading</h2>
							<p className='fs-3'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
								magni voluptatem impedit, vitae eum aliquam inventore sunt ex
								eaque.
							</p>
							<h2>Heading</h2>
							<p className='fs-3'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
								magni voluptatem impedit, vitae eum aliquam inventore sunt ex
								eaque.
							</p>
							<h2>Heading</h2>
							<p className='fs-3'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
								magni voluptatem impedit, vitae eum aliquam inventore sunt ex
								eaque.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
