import './Display.css';
import React from "react";

class Display extends React.Component {
    render() {
        return(
            <div className="Display">
                {this.props.number}
                {this.props.operator}
                {this.props.number2}
            </div>
        );
    }
}

export default Display;
