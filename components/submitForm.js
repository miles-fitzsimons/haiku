import React, { Component } from 'react'
import getSyllables from '../lib/getSyllables'
import data from '../database/haikus.json'


class SubmitForm extends Component {
		constructor (props) {
	  super(props)
			this.state = {
				count1: 0,
				count2: 0,
				count3: 0,
				class1: 'incorrectCount',
				class2: 'incorrectCount',
				class3: 'incorrectCount',
				title: '',
				author: '',
				line1: '',
				line2: '',
				line3: ''
			}
	}

	handleChange(e) {
		var name = e.target.name
		var idCount = 'count' + name
		var idClass = 'class' + name
		var idLine = 'line' + name
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
					t.setState({
						[idClass]: 'correctCount',
						[idLine]: currentLine
					})
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
	}

	getOthers(e) {
		var input = e.target.value
		var name = e.target.name
		this.setState({[name]: input})
	}

	submitHaiku(s) {
		var obj = {}
		obj.title = this.state.title
		obj.author = this.state.author
		obj.first_line = this.state.line1
		obj.second_line = this.state.line2
		obj.third_line = this.state.line3
		data.haikus.unshift(obj)
		console.log("here be data", data)
	}

	render() {
		return (
			<div>
				<input type="text" name="title" placeholder="Title" onBlur={this.getOthers.bind(this)} /><br/><br/>
				<input type="text" name="author" placeholder="Author" onBlur={this.getOthers.bind(this)} /><br/><br/>
				<span className={this.state.class1}><input className=
				"textInput" name="1" type="text" placeholder="5 syllables" onChange={this.handleChange.bind(this)} /> {this.state.count1} syllables</span><br/><br/>
				<span className={this.state.class2}><input className=
				"textInput" name="2" type="text" placeholder="7 syllables" onChange={this.handleChange.bind(this)} /> {this.state.count2} syllables</span><br/><br/>
				<span className={this.state.class3}><input className=
				"textInput" name="3" type="text" placeholder="5 syllables" onChange={this.handleChange.bind(this)} /> {this.state.count3} syllables</span><br/><br/>
				
				<button id="submitButton" onClick={this.submitHaiku.bind(this)}>Submit</button> 
			</div>
		)
	}

}

export default SubmitForm

//remember to put the disabled value back