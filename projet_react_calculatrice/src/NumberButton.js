
import './NumberButton.css';
import React from "react";

class NumberButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.props.onBtnTouched(this.props.number);
    }

    render() {
        return(
            <div className="NumberButton">
                <button value={this.props.number} onClick={this.handleChange}>{this.props.number}</button>
            </div>
        );
    }
}

export default NumberButton;
