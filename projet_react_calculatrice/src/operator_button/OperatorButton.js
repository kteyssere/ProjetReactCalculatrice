import './OperatorButton.css';
import React from "react";

class OperatorButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onBtnTouched(this.props.operator);
    }

    render() {
        return(
            <div className="OperatorButton">
                <button value={this.props.operator} onClick={this.handleClick}>{this.props.operator}</button>
            </div>
        );
    }
}

export default OperatorButton;