
import './History.css';
import React from "react";

class History extends React.Component {

    render() {
        return(
            <div className="History">
                <p>History :</p>
                <ol>
                    {this.props.list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default History;