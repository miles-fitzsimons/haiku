import React, { Component } from 'react'

class Haiku extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h3>Title, Author</h3>
				<p>Line 1</p>
				<p>Line 2</p>
				<p>Line 3</p>
			</div>
			)
	}

}

export default Haiku