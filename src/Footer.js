import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<div className='footerpagespan'>
				<div className='container footerflexbox'>
					<div className='row'>
						<div className='col-4 mt-5 p-4'><h5>Heading</h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus veritatis aliquid, necessitatibus aspernatur rem mollitia reiciendis nostrum. Repellendus doloremque quas, labore nesciunt voluptatem eveniet id asperiores excepturi, ut vel exercitationem?</div>
						<div className='col-4 mt-5 p-4'><h5>Heading</h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum dignissimos necessitatibus et fuga dolorum autem illum quo ipsa fugit quam quis ab labore consequuntur repellat, quasi praesentium nesciunt voluptate sequi?</div>
						<div className='col-4 mt-5 p-4'><h5>Some Links</h5>
							<ul>
								<li>
									<a href='/'>Link</a>
								</li>
								<li>
									<a href='/'>Link</a>
								</li>
								<li>
									<a href='/'>Link</a>
								</li>
								<li>
									<a href='/'>Link</a>
								</li>
							</ul>
						</div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ducimus vel aut illo error voluptate perspiciatis ipsam quas. Harum ab deserunt odit iusto cum laborum laudantium blanditiis rerum corporis dicta?
                        Quasi, at. Minima deleniti temporibus voluptatem dicta tempore consequatur ad tenetur quam non, magni sunt enim ipsa! Quasi, blanditiis aliquid nostrum ipsum amet architecto aperiam excepturi. Officiis eaque excepturi animi.</div>
                    </div>
				</div>
			</div>
		);
	}
}

export default Footer;
