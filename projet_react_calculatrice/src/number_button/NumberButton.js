
import './NumberButton.css';
import React from "react";

class NumberButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onBtnTouched(this.props.number);
    }

    render() {
        return(
            <div className="NumberButton">
                <button value={this.props.number} onClick={this.handleClick}>{this.props.number}</button>
            </div>
        );
    }
}

export default NumberButton;
