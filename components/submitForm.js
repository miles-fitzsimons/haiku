import React, { Component } from 'react'
import getSyllables from '../lib/getSyllables'

class SubmitForm extends Component {
		constructor (props) {
	  super(props)
			this.state = {
				count1: 0,
				count2: 0,
				count3: 0,
				class1: 'incorrectCount',
				class2: 'incorrectCount',
				class3: 'incorrectCount'
			}
	}

	handleChange(e) {
		var name = e.target.name
		var idCount = 'count' + name
		var idClass = 'class' + name
		var currentLine = e.target.value
		var t = this
		var correctCount
		if(e.target.name == 1 || e.target.name == 3) {
			correctCount = 5
		}
		else {
			correctCount = 7
		}
		getSyllables(currentLine)
			.then(function(res) {
				if(res === correctCount) {
					t.setState({[idClass]: 'correctCount'})
				}
				else {
					t.setState({[idClass]: 'incorrectCount'})
				}
				t.setState({[idCount]: res})
			})
			.catch(function(err) {
				console.log('Err::', err)
			})
			if(this.state.count1 === 5 && this.state.count2 === 7 && this.state.count3 === 5) {
				document.getElementById('submitButton').disabled = false
			}
			else {
				document.getElementById('submitButton').disabled = true
			}
			console.log('AA', this.state)
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Title" /><br/><br/>
				<input type="text" placeholder="Author" /><br/><br/>
				<span className={this.state.class1}><input name="1" type="text" placeholder="5 syllables" onChange={this.handleChange.bind(this)} /> {this.state.count1} syllables</span><br/><br/>
				<span className={this.state.class2}><input name="2" type="text" placeholder="7 syllables" onChange={this.handleChange.bind(this)} /> {this.state.count2} syllables</span><br/><br/>
				<span className={this.state.class3}><input name="3" type="text" placeholder="5 syllables" onChange={this.handleChange.bind(this)} /> {this.state.count3} syllables</span><br/><br/>
				
				<button id="submitButton" disabled>Submit</button>
			</div>
		)
	}

}

export default SubmitForm