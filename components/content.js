import React, { Component } from 'react'
import Haiku from './haiku'
import data from '../database/haikus.json'

class Content extends Component {
	constructor(props) {
		super(props)
			this.state = {
				id: 0,
				title: '',
				author: '',
				first_line: '',
				second_line: '',
				third_line: ''
			}
	}


	render() {
		console.log("here be data", data)
		return (
			<div>
				{data.haikus.map(function(haiku, index) {
					return (
						<Haiku 
							key={index}
							title={haiku.title} 
							author={haiku.author} 
							line1={haiku.first_line} 
							line2={haiku.second_line} 
							line3={haiku.third_line} 
						/>
						)
				})}
			</div>
		)
	}

}

export default Content