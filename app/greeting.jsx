import React from 'react';

export default class Greeting extends React.Component {

    componentDidMount(){
        console.log("Greeting mounted");
    }

    render(){
        return (
            <div className="main-message">
                <p>Hello, user! I've been expecting you.</p>
            </div>
        );
    }

}