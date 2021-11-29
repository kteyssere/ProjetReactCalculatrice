
import './ManageButton.css';
import React from "react";

class ManageButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.props.onBtnTouched(this.props.manage);
    }

    render() {
        return(
            <div className="ManageButton">
                <button value={this.props.manage} onClick={this.handleChange}>{this.props.manage}</button>
            </div>
        );
    }

}

export default ManageButton;