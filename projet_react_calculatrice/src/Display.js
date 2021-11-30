
import './Display.css';
import React from "react";


class Display extends React.Component {

    render() {
        return(
            <div className="Display">
                {this.props.number}
            </div>
        );
    }
}

export default Display;
