import ReactDOM from 'react-dom';
import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Greeting from './greeting.jsx';

class BaseStation extends React.Component {

    componentDidMount(){
        console.log("Base mounted");
    }

    render(){
        return (
            <div>
                <Header greeting="Jeremy's First React from scratch"/>
                <div className="main-message">
                    <p>Hello, user! I've been expecting you.</p>
                </div>
                <Footer copyright="©2016-2017 Jeremy Moore. Licensed under MIT licence."/>
            </div>
        );
    }

}

// Render them
ReactDOM.render(<BaseStation />, document.getElementById('launchpad'));