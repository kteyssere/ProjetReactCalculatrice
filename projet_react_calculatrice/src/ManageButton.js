
import './ManageButton.css';
import React from "react";

class ManageButton extends React.Component {

    render() {
        return(
            <div className="OtherButton">
                <button name="=" onClick={this.calculate}>=</button>
                <button onClick={this.addnum}>Suppr</button>
            </div>
        );
    }

}

export default ManageButton;