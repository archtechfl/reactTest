import _ from 'lodash';
import ReactDOM from 'react-dom';
import React from 'react';

class Header extends React.Component {

	render(){
	  	return (
	  		<div>Header goes here</div>
	  	);
	  }

}

class BaseStation extends React.Component {

  render(){
  	return (
  		<div>
	  		<Header />
	  		<div>Hello, user! I've been expecting you.</div>
	  	</div>
  	);
  }

}

// Render them
ReactDOM.render(<BaseStation />, document.getElementById('launchpad'));