
import './OperatorButton.css';
import React from "react";

class OperatorButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.props.onBtnTouched(this.props.operator);
    }

    render() {
        return(
            <div className="OperatorButton">
                <button value={this.props.operator} onClick={this.handleChange}>{this.props.operator}</button>
            </div>
        );
    }
}

export default OperatorButton;
