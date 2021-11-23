
import './Display.css';
import React from "react";


class Display extends React.Component {


    // handleChange(){
    //     this.props.ondisplay(this.props.display);
    // }


    render() {
        return(
            <div className="Display">
                {/*<input type="text" value={this.props.display} readOnly={true}/>*/}
                {this.props.display}
            </div>
        );
    }

}

export default Display;
