
import './Calculatrice.css';
import React from "react";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import ManageButton from "./ManageButton";
import Display from "./Display";

class Calculatrice extends React.Component {

    constructor(props) {
        super(props);
        this.initBtn = this.initBtn.bind(this);
        this.state = {number:'', display:''};
    }

    initBtn(number){
        console.log(number);
        this.setState({number});

    }

    initDisplay(){
        console.log(this.props.number);
        console.log(this.props.display);
        this.setState({display:this.props.number});
        return this.state.display;
    }


    render() {
        return(
            <div className="Calculatrice">
                <Display

                    display={this.initDisplay}
                    />

                <NumberButton
                    number={0}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={1}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={2}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={3}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={4}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={5}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={6}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={7}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={8}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={9}
                    onBtnTouched={this.initBtn}/>

                <OperatorButton/>

                <ManageButton/>

            </div>
        );
    }

}

export default Calculatrice;
