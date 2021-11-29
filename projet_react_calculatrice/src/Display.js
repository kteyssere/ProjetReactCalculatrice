
import './Display.css';
import React from "react";


class Display extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    // }
    //
    // handleChange(){
    //     this.props.onBtnTouched(this.props.operator);
    // }


    render() {
        return(
            <div className="Display">
                {/*<input type="text" value={this.props.display} readOnly={true}/>*/}
                {this.props.number}
                {this.props.operator}
                {this.props.number2}
                {this.props.manage}
                {this.props.result}
            </div>
        );
    }

}

export default Display;
