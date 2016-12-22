import _ from 'lodash';
import ReactDOM from 'react-dom';
import React from 'react';

class BaseStation extends React.Component {

  render(){
  	return (
  		<div>Hello, user!</div>
  	);
  }

}

// Render them
ReactDOM.render(<BaseStation />, document.getElementById('launchpad'));