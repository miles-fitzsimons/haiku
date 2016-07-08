import React, { Component } from 'react'
import getSyllables from '../lib/getSyllables'

class SubmitForm extends Component {
		constructor (props) {
	  super(props)
			this.state = {
				count1: 0,
				count2: 0,
				count3: 0
			}
	}

	handleChange(e) {
		var id = 'count' + e.target.name
		var currentLine = e.target.value
		var t = this
		getSyllables(currentLine)
			.then(function(res) {
				t.setState({[id]: res})
			})
			.catch(function(err) {
				console.log('Err::', err)
			})
	}



	render() {
		console.log(getSyllables)
		return (
			<div>
				<input type="text" placeholder="Title" /><br/><br/>
				<input type="text" placeholder="Author" /><br/><br/>
				<span><input name="1" type="text" placeholder="5 syllables" onChange={this.handleChange.bind(this)} /> {this.state.count1} syllables</span><br/><br/>
				<span><input name="2" type="text" placeholder="7 syllables" onChange={this.handleChange.bind(this)} /> {this.state.count2} syllables</span><br/><br/>
				<span><input name="3" type="text" placeholder="5 syllables" onChange={this.handleChange.bind(this)} /> {this.state.count3} syllables</span><br/><br/>
				
				<button>Submit</button>
			</div>
		)
	}

}

export default SubmitForm