import React from 'react';

class TextInput extends React.Component {

    constructor(props){
        super(props)
        this.updateContent = this.props.updateContent;
    }

    componentDidMount(){
        console.log("Text input mounted");
    }

    render(){
        return (
            <div>
                <label>{this.props.label}</label>
                <input type="text" onChange={this.updateContent}/>
            </div>
        );
    }

}

export {TextInput}