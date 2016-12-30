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
                <p>{this.props.greeting}</p>
            </div>
        );
    }

}