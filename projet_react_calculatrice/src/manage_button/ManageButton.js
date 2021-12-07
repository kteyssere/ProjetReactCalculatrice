import './ManageButton.css';
import React from "react";

class ManageButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    //
    handleClick(){
        this.props.onBtnTouched(this.props.manage);
    }

    render() {
        return(
            <div className="ManageButton">
                <button value={this.props.manage} onClick={this.handleClick}>{this.props.manage}</button>
            </div>
        );
    }
}

export default ManageButton;