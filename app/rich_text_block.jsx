import React from 'react';

export default class RichTextBlock extends React.Component {

    componentDidMount(){
        console.log("Rich text block mounted");
    }

    render(){
        return (
            <div className="rich-text-block">
                <p>{this.props.text}</p>
            </div>
        );
    }

}