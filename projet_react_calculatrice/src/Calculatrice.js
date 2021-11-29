
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
        this.initOperator = this.initOperator.bind(this);
        this.initManager = this.initManager.bind(this);

        this.state = {
            number:'',
            number2:'',
            display:'',
            operator:'',
            manage:'',
            result:''

        };
    }

    initBtn(number){
        if (this.state.operator === '') {
            const previousNumber = this.state.number;
            const newNumber = previousNumber + number;
            this.setState({number: newNumber});
            console.log('newNumber : ' + newNumber);
        }else{
            const previousNumber2 = this.state.number2;
            const newNumber2 = previousNumber2 + number;
            this.setState({number2: newNumber2});
            console.log('newNumber2 : '+newNumber2);
        }

    }


    initOperator(operator){
        console.log(operator);
        this.setState({operator:operator});
    }

    initManager(manage) {
        console.log(manage);
        if (manage === 'Suppr') {
            this.setState({number: '', number2: '', display: '', operator: '', manage: '', result: ''});
        }


        console.log(this.state.operator)
        if (manage === '=') {
            this.setState({manage:'='});

            let res = 0;
            switch (this.state.operator) {

                case '+':
                    res = parseFloat(this.state.number) + parseFloat(this.state.number2);
                    this.setState({result: res});
                    console.log(res);
                    console.log(this.state.result);
                    break;
                case '-':
                    res = parseFloat(this.state.number) - parseFloat(this.state.number2);
                    this.setState({result: res});
                    console.log(res);
                    console.log(this.state.result);
                    break;
                case 'x':
                    res = parseFloat(this.state.number) * parseFloat(this.state.number2);
                    this.setState({result: res});
                    console.log(res);
                    console.log(this.state.result);
                    break;
                case '÷':
                    if(this.state.number2!=='0'){
                        res = parseFloat(this.state.number) / parseFloat(this.state.number2);
                        this.setState({result: res});
                        console.log(res);
                        console.log(this.state.result);
                    }else{

                        this.setState({result: 'Erreur'});
                    }
                    break;
                default:

            }
        }
    }

    initDisplay(){
        console.log(this.props.number);
        console.log(this.props.display);
        //this.setState({display:this.props.number});
        //return this.state.display;
    }


    render() {
        return(
            <div className="Calculatrice">
                <Display
                    number={this.state.number}
                    number2={this.state.number2}
                    operator={this.state.operator}
                    result={this.state.result}
                    manage={this.state.manage}
                    />

                <br/>

                <NumberButton
                    number={1}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={2}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={3}
                    onBtnTouched={this.initBtn}/>

                <br/>

                <NumberButton
                    number={4}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={5}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={6}
                    onBtnTouched={this.initBtn}/>

                <br/>

                <NumberButton
                    number={7}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={8}
                    onBtnTouched={this.initBtn}/>
                <NumberButton
                    number={9}
                    onBtnTouched={this.initBtn}/>

                <br/>

                <NumberButton
                    number={0}
                    onBtnTouched={this.initBtn}/>

                <br/>

                <OperatorButton
                    operator={'+'}
                    onBtnTouched={this.initOperator}
                />
                <OperatorButton
                    operator={'-'}
                    onBtnTouched={this.initOperator}
                />
                <OperatorButton
                    operator={'x'}
                    onBtnTouched={this.initOperator}
                />
                <OperatorButton
                    operator={'÷'}
                    onBtnTouched={this.initOperator}
                />

                <br/>

                <ManageButton
                    manage={'='}
                    onBtnTouched={this.initManager}
                />
                <ManageButton
                    manage={'Suppr'}
                    onBtnTouched={this.initManager}
                />
            </div>
        );
    }
}

export default Calculatrice;
