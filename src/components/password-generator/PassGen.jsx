// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import styles from "../../assets/styles/pass-gen/passGen.module.scss";
import iconCopy from "../../assets/images/pass-gen/iconcopy.png";
class PassGen extends Component{
    constructor(props){
        super(props);
        this.ucSelect = React.createRef();
        this.lcSelect = React.createRef();
        this.nuSelect = React.createRef();
        this.sySelect = React.createRef();
        this.state={
            charLength:0,
            passCreated:""
        }
    }

    createPass = ()=>{
        // check status checkboxes
        let statusUpper = this.ucSelect.current.checked;
        let statusLower = this.lcSelect.current.checked;
        let statusNumber = this.nuSelect.current.checked;
        let statusSymbol = this.sySelect.current.checked;

        // create allStrings
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lowerCase = "abcdefghijklmnopqrstuvwxyz";
        let number ="0123456789";
        let symbol= "!@#$%&?";

        const all = [];
        statusLower ? all.push(lowerCase) : all.filter(item => item !== lowerCase);
        statusUpper ? all.push(upperCase) : all.filter(item => item !== upperCase);
        statusNumber ? all.push(number) : all.filter(item=>item !== number);
        statusSymbol ? all.push(symbol) : all.filter(item => item !== symbol);

        // create password
        const {charLength} = this.state;

        var passwordCreated = "";
        for(let i = 0 ; i < charLength ; i++){
            if(all.length == 0) return;
            let nRandom = Math.floor(Math.random() * all.length);
            let nnRandom = Math.floor(Math.random() * all[nRandom].length);
            passwordCreated += all[nRandom][nnRandom];    
        }
        this.setState({
            passCreated:passwordCreated,
        })                             
    }

    changeLength = (event)=>{
        this.setState({
            charLength : event.target.value
        },()=>this.createPass())
    }



    render(){
        return(
            <div className={styles.container}>
                <h2>Password Generator</h2>
                <div className={styles.container_passWasCreate}>
                    <p>{this.state.passCreated}</p>
                    <img src={iconCopy} alt="iconCopy" />
                </div>
                <div className={styles.container_createPass}>
                    <div className={styles.passLength}>
                        <div>
                            <p>Character Length</p>
                            <h1>{this.state.charLength}</h1>
                        </div>
                        <div className={styles.rangeChar}>
                            <input type="range" min="0" max="13" name="rangeLen" value={this.state.charLength} onChange={this.changeLength}/>
                        </div>
                    </div>
                    <div className={styles.passStrength}>
                        <ul>
                            <li>
                            <input ref={this.ucSelect} onClick={this.createPass} type="checkbox" name="uppercase"/>
                            <p>Include Uppercase Letters</p>
                            </li>
                            <li>
                            <input ref={this.lcSelect} onClick={this.createPass} type="checkbox" name="lowercase" />
                            <p>Include Lowercase Letters</p>
                            </li>
                            <li>
                            <input ref={this.nuSelect} onClick={this.createPass} type="checkbox" name="number" />
                            <p>Include Numbers</p>
                            </li>
                            <li>
                            <input ref={this.sySelect} onClick={this.createPass} type="checkbox" name="symbols" />
                            <p>Include Symbols</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.showStrength}>
                        <p>STRENGTH</p>
                        <h1>🟡🟡</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default PassGen;