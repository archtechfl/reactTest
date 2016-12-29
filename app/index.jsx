import ReactDOM from 'react-dom';
import React from 'react';

class Header extends React.Component {

	componentDidMount(){
		console.log("Header mounted");
	}

	render(){
	  	return (
	  		<div>
	  			<h1>Customized greeting follows:</h1>
	  			<p>{this.props.greeting}</p>
	  		</div>
	  	);
	}

}

class Footer extends React.Component {

	componentDidMount(){
		console.log("Footer mounted");
	}

	render(){
	  	return (
	  		<div>Footer goes here</div>
	  	);
	}

}

class BaseStation extends React.Component {

	componentDidMount(){
		console.log("Base mounted");
	}

	render(){
	  	return (
	  		<div>
		  		<Header greeting="Jeremy's First React from Scratch"/>
		  		<div>Hello, user! I've been expecting you.</div>
		  		<Footer />
		  	</div>
	  	);
  	}

}

// Render them
ReactDOM.render(<BaseStation />, document.getElementById('launchpad'));