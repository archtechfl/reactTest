import React from 'react';

export default class Header extends React.Component {

    componentDidMount(){
        console.log("Header mounted");
    }

    render(){
        return (
            <div className="header">
                <h1>My React JS project from the ground up</h1>
                <h2>Customized greeting follows:</h2>
                <p>Now with source mapping!</p>
                <p>Also, switched from Webpack to Gulp build</p>
                <p>Gulp is watching all files: Browserify is now working with Babelify</p>
                <p>LESS compiling also using Gulp now</p>
                <p>Blog post comparing Webpack to Gulp is coming soon</p>
                <p>{this.props.greeting}</p>
            </div>
        );
    }

}