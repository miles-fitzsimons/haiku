import React, { Component } from 'react'
import Header from './header'
import Submit from './submit'
import About from './about'
import Content from './content'

class App extends Component {



  render () {
    return (
    	<div>
	    	<Header />
	    	<About />
	    	<Submit />
	    	<Content />
    	</div>
    )
  }

}

export default App
