
import "./Calculatrice.css"
import React from "react";
import NumberButton from "../number_button/NumberButton";
import OperatorButton from "../operator_button/OperatorButton";
import ManageButton from "../manage_button/ManageButton";
import Display from "../display/Display";
import History from "../history/History";
//import logo from "../images/logo.png"
import logo from "../images/signature.png"


class Calculatrice extends React.Component {

    //Constructeur de la calculatrice créant les différents états
    constructor(props) {
        super(props);
        this.setNumber = this.setNumber.bind(this);
        this.setOperator = this.setOperator.bind(this);
        this.setManager = this.setManager.bind(this);

        this.state = {
            number:'',
            number2:'',
            operator:'',
            manage:'',
            result:'',
            history:[]
        };
    }

    //Ajoute un nombre/chiffre à l'état number
    setNumber(number){
        if (this.state.operator === '') {
            const previousNumber = this.state.number;
            const newNumber = previousNumber + number;
            this.setState({number: newNumber});
            //this.setState({history: newNumber});
        }else{
            const previousNumber2 = this.state.number2;
            const newNumber2 = previousNumber2 + number;
            this.setState({number2: newNumber2});
        }
    }

    //Ajoute un opérateur à l'état operator
    setOperator(operator){
        this.setState({operator:operator});
    }

    //Met à vide les états lorsque le bouton cliqué renvoie C
    //Calcule en fonction de l'état operator retourné, le résultat de l'opération correspondante
    setManager(manage) {

        if (manage === 'C') {
            this.setState({number: '', number2: '', operator: '', manage: '', result: ''});
        }

        if (manage === 'CH') {
            this.setState({history: []});
        }

        if (manage === '=') {
            let res = 0;
            let newState = {...this.state}
            newState.manage = '=';
            switch (this.state.operator) {
                case '+':
                    res = parseFloat(this.state.number) + parseFloat(this.state.number2);
                    newState.result = res;
                    newState.history.push([newState.number, newState.operator, newState.number2,newState.manage,newState.result]);
                    newState.number = res;
                    newState.operator = '';
                    newState.number2 = null;
                    break;

                case '-':
                    console.log("num 1 : "+this.state.number);
                    console.log("num 2 : "+this.state.number2);
                    res = parseFloat(this.state.number) - parseFloat(this.state.number2);
                    newState.result = res;
                    newState.history.push([newState.number, newState.operator, newState.number2,newState.manage,newState.result]);
                    newState.number = res;
                    newState.operator = '';
                    newState.number2 = null;
                    break;

                case 'x':
                    res = parseFloat(this.state.number) * parseFloat(this.state.number2);
                    newState.result = res;
                    newState.history.push([newState.number, newState.operator, newState.number2,newState.manage,newState.result]);
                    newState.number = res;
                    newState.operator = '';
                    newState.number2 = null;
                    break;

                case '÷':
                    if(this.state.number2!=='0'){
                        res = parseFloat(this.state.number) / parseFloat(this.state.number2);
                        newState.result = res;
                        newState.history.push([newState.number, newState.operator, newState.number2,newState.manage,newState.result]);
                        newState.number = res;
                        newState.operator = '';
                        newState.number2 = null;

                    }else{
                        res = 'Erreur'
                        newState.result = res;
                        newState.history.push([newState.number, newState.operator, newState.number2,newState.manage,newState.result]);
                    }
                    break;
                default:
            }
            this.setState(newState);
            console.log(this.state.history);
            console.log(this.state.result);
        }
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

                <OperatorButton
                    operator={'+'}
                    onBtnTouched={this.setOperator}
                />
                <OperatorButton
                    operator={'-'}
                    onBtnTouched={this.setOperator}
                />
                <OperatorButton
                    operator={'x'}
                    onBtnTouched={this.setOperator}
                />
                <OperatorButton
                    operator={'÷'}
                    onBtnTouched={this.setOperator}
                />

                <NumberButton
                    number={7}
                    onBtnTouched={this.setNumber}/>
                <NumberButton
                    number={8}
                    onBtnTouched={this.setNumber}/>
                <NumberButton
                    number={9}
                    onBtnTouched={this.setNumber}/>

                <div className="equal">
                    <ManageButton
                        manage={'='}
                        onBtnTouched={this.setManager}
                    />
                </div>

                <br/>

                <NumberButton
                    number={4}
                    onBtnTouched={this.setNumber}/>
                <NumberButton
                    number={5}
                    onBtnTouched={this.setNumber}/>
                <NumberButton
                    number={6}
                    onBtnTouched={this.setNumber}/>

                <div className="suppr">
                    <ManageButton
                        manage={'C'}
                        onBtnTouched={this.setManager}
                    />
                </div>

                <br/>

                <NumberButton
                    number={1}
                    onBtnTouched={this.setNumber}/>
                <NumberButton
                    number={2}
                    onBtnTouched={this.setNumber}/>
                <NumberButton
                    number={3}
                    onBtnTouched={this.setNumber}/>

                <div className="clearlist">
                    <ManageButton
                        manage={'CH'}
                        onBtnTouched={this.setManager}
                    />
                </div>

                <br/>

                <NumberButton
                    number={0}
                    onBtnTouched={this.setNumber}/>

                <NumberButton
                    number={'.'}
                    onBtnTouched={this.setNumber}/>

                {/*<p>By kt et br</p>*/}

                <img src={logo}/>


                <History
                    number={this.state.number}
                    number2={this.state.number2}
                    operator={this.state.operator}
                    result={this.state.result}
                    manage={this.state.manage}
                    list={this.state.history}
                />
                <br/>
                <p>C : clear</p>
                <p>CH : clear history</p>
            </div>


        );
    }
}

export default Calculatrice;
