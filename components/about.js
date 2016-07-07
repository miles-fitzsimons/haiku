import React, { Component } from 'react'

class About extends Component {
	constructor(props) {
		super(props)
		this.state = {image: "../smile.jpg", i: 0}
	}


	handleClick() {
		if (this.state.i === 0) 
		{
			this.setState({image: "../neutral.jpg", i: 1})
			console.log('CLICK', this.state.i)
		}
		else {
			this.setState({image: "../smile.jpg", i: 0})
			console.log('CLICK', this.state.i)
		}
	}

	render() {
		return (
			<div>
			<img src={this.state.image} onClick={this.handleClick.bind(this)} />

			<p >
			Haiku: (HI-KOO) A silly poem from Japan with an arbitrary number of syllables
			</p>
			</div>
			)
	}

}

export default About