import React, { Component } from "react";
import "./Mainpage.css";

class Mainpage extends Component {
	render() {
		return (
			<div className='pagespan'>
				<div className='container text-start'>
					<h1 className='heading text-center text-uppercase bump'>
						PF Aesthetic
					</h1>
					<div className='row'>
						<div className='col-6'>
							<img
								src='https://picsum.photos/800/600'
								alt=''
								className='img-fluid rounded'
							/>
						</div>
						<div className='col-6'>
							<p className='fs-3'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
								magni voluptatem impedit, vitae eum aliquam inventore sunt ex
								eaque voluptate molestias tempora quibusdam asperiores esse
								ratione ab facilis natus alias. Ad, at molestias cupiditate
								minus placeat consequuntur perferendis cum qui fuga voluptatum
								nihil, odio excepturi necessitatibus aspernatur id officiis
								maiores mollitia ullam! At architecto necessitatibus voluptas!
								Ut est beatae aliquid!
							</p>
						</div>
					</div>
					
					<div className='row mt-5 mb-5'>
						<div className='col-6'>
							<p className='fs-3'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, tenetur vitae minus adipisci recusandae, earum neque dolores quibusdam incidunt sint assumenda quam, saepe fugiat beatae quod dolore. Earum, quisquam qui?
								Temporibus, similique deleniti! Quod, rem at, magni delectus cum dolor ratione cupiditate enim consectetur consequuntur ipsa iure consequatur.
							</p>
						</div>
						<div className='col-6'>
							<img
								src='https://picsum.photos/800/500'
								alt=''
								className='img-fluid rounded'
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Mainpage;
