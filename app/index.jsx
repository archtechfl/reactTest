import ReactDOM from 'react-dom';
import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import RichTextBlock from './rich_text_block.jsx';
import {TextInput} from './form_fields.jsx';

class BaseStation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: "default user",
        }
    }

    componentDidMount(){
        console.log("Base mounted");
    }

    updateUserName(name){
        this.setState({"user": name.target.value});
    }

    render(){
        return (
            <div>
                <Header greeting="Jeremy's First React from scratch"/>
                <TextInput updateUserName={this.updateUserName.bind(this)} label="Enter your name here"/>
                <RichTextBlock text={"Hello, " + this.state.user + "! I've been expecting you."}/>
                <Footer copyright="©2016-2017 Jeremy Moore. Licensed under MIT licence."/>
            </div>
        );
    }

}

// Render them
ReactDOM.render(<BaseStation />, document.getElementById('launchpad'));