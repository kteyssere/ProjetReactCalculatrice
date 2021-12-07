
import './App.css';
import React from "react";
import Calculatrice from "./calculatrice/Calculatrice";

class App extends React.Component {

    render() {
        return(
            <div className="App">
                <Calculatrice/>
            </div>
        );
    }
}

export default App;