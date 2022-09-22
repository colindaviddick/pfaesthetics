import React, { Component } from "react";
import "./Hero.css";

class Hero extends Component {
	render() {
		return (
            <div className='herocontainer align-middle'>
                <div className="background"></div>
				<div className='row screen align-middle'>
					<div className='col-8'></div>
					<div className='col-4 screenright'>
						<div>
							<h1 className='text-uppercase align-right'>
								PF Aesthetic
							</h1>
                            <h5 className='text-uppercase text-muted'>Photography blog</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur distinctio molestiae pariatur aliquid velit deserunt nisi asperiores dolores nemo, delectus et fugit, quos dolor reprehenderit fuga, perspiciatis maiores hic!
                            Architecto laboriosam quidem, qui est consectetur tempora, ipsa placeat et optio itaque pariatur officia iure a explicabo sunt nobis at eius labore temporibus esse. Tempora rerum quod voluptate nisi rem.
                            Illum quos voluptatem odit ullam velit debitis in cum amet est atque? Nobis repellendus nihil maiores itaque ab facere commodi dolor neque tempore nostrum id tenetur aut quidem, nam soluta?</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Hero;
