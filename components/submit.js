import React, { Component } from 'react'
import SubmitForm from './submitForm'

class Submit extends Component {

	constructor (props) {
	  super(props)
	  	this.state = {
	  		showSubmit: false
	  	}
	}

	handleClick(event) {
		if (this.state.showSubmit) {
			this.setState({showSubmit : false})
		} else {
			this.setState({showSubmit : true})
		}
	}

	render() {
		return (
			<div>
				<h1 onClick={this.handleClick.bind(this)}>Click here to submit a haiku</h1>
				{this.state.showSubmit ? <SubmitForm /> : null}
			</div>
		)
	}

}

export default Submit