import React, { Component } from 'react'

class About extends Component {
	constructor(props) {
		super(props)
		this.state = {image: "../images/01-haiku-master-clickme.png", i: 0}
	}


	handleClick() {
		if (this.state.i === 0) 
		{
			this.setState({image: "../images/01-haiku-master-clickme.png", i: 1})
		}
		else {
			this.setState({image: "../images/02-haiku-master.png", i: 0})
		}
	}

	render() {
		return (
			<div>
				<img src={this.state.image} onClick={this.handleClick.bind(this)} />
			</div>
			)
	}

}

export default About