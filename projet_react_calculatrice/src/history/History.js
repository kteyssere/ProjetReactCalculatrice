
import './History.css';
import React from "react";

class History extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    //
    // //
    // handleClick(){
    //     this.props.onBtnTouched(this.props.manage);
    // }

    render() {
        return(
            <div className="History">
                {this.props.number}
                {this.props.operator}
                {this.props.number2}
                {this.props.manage}
                {this.props.result}
                <br/>
            </div>
        );
    }
}

export default History;