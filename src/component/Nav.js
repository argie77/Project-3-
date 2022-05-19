import React from "react"
import { Link } from "react-router-dom"

function Nav (props) {
	return (
		<div className="Nav">
			<Link to="/"> Home
				
			</Link>
			<Link to="/Productlist">
				<div>Productlist</div>
			</Link>
		</div>
	)
}

export default Nav