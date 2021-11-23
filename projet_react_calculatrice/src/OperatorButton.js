
import './OperatorButton.css';
import React from "react";

class OperatorButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {operator:""};
    }

    addOp(){
        //Initialise operator par la val du bouton cliqué
    }

    render() {
        return(
            <div className="OperatorButton">
                <button name="+" onClick={this.handleClick} ref={this.op}>+</button>
                <button name="-" onClick={this.handleClick}>-</button>
                <button name="x" onClick={this.handleClick}>x</button>
                <button name="÷" onClick={this.handleClick}>÷</button>
            </div>
        );
    }

}

export default OperatorButton;
