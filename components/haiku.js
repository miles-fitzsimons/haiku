import React, { Component } from 'react'

class Haiku extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<h3>{this.props.author}</h3>
				<p>{this.props.line1}</p>
				<p>{this.props.line2}</p>
				<p>{this.props.line3}</p>
			</div>
			)
	}

}

export default Haiku