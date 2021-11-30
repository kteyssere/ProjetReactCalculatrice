
import './Calculatrice.css';
import React from "react";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import ManageButton from "./ManageButton";
import Display from "./Display";

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
            display:'',
            operator:'',
            manage:'',
            result:''
        };
    }

    //Ajoute un nombre/chiffre à l'état number
    setNumber(number){
        if (this.state.operator === '') {
            const previousNumber = this.state.number;
            const newNumber = previousNumber + number;
            this.setState({number: newNumber});
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
            this.setState({number: '', number2: '', display: '', operator: '', manage: '', result: ''});
        }
        if (manage === '=') {
            this.setState({manage:'='});
            let res = 0;
            switch (this.state.operator) {
                case '+':
                    res = parseFloat(this.state.number) + parseFloat(this.state.number2);
                    this.setState({result: res});
                    this.setState({number: res});
                    this.setState({number2: null});
                    break;
                case '-':
                    res = parseFloat(this.state.number) - parseFloat(this.state.number2);
                    this.setState({result: res});
                    this.setState({number: res});
                    this.setState({number2: null});
                    break;
                case 'x':
                    res = parseFloat(this.state.number) * parseFloat(this.state.number2);
                    this.setState({result: res});
                    this.setState({number: res});
                    this.setState({number2: null});
                    break;
                case '÷':
                    if(this.state.number2!=='0'){
                        res = parseFloat(this.state.number) / parseFloat(this.state.number2);
                        this.setState({result: res});
                        this.setState({number: res});
                        this.setState({number2: null});
                    }else{
                        this.setState({result: 'Erreur'});
                        this.setState({number: 'Erreur'});
                    }
                    break;
                default:
            }
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

                <br/>

                <NumberButton
                    number={0}
                    onBtnTouched={this.setNumber}/>

                <NumberButton
                    number={'.'}
                    onBtnTouched={this.setNumber}/>

            </div>
        );
    }
}

export default Calculatrice;
