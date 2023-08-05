// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import styles from "../../assets/styles/pass-gen/passGen.module.scss";

import iconCopy from "../../assets/images/pass-gen/iconcopy.png";
class PassGen extends Component{
    constructor(props){
        super(props);
        this.state={
            charLength:0,
            uppercase:false,
            lowercase:false,
            numbers:false,
            symols:false,
        }
    }
    render(){
        return(
            <div className={styles.container}>
                <h2>Password Generator</h2>
                <div className={styles.container_passWasCreate}>
                    <p>Pd43pj9r!</p>
                    <img src={iconCopy} alt="iconCopy" />
                </div>
                <div className={styles.container_createPass}>
                    <div className={styles.passLength}>
                        <div>
                            <p>Character Length</p>
                            <p>0</p>
                        </div>
                        <div>
                            <input type="range" name="rangeLen"/>
                        </div>
                    </div>
                    <div className={styles.passStrength}>
                        <ul>
                            <li>
                            <input type="checkbox" name="uppercase" />
                            <p>Include Uppercase Letters</p>
                            </li>
                            <li>
                            <input type="checkbox" name="lowercase" />
                            <p>Include Lowercase Letters</p>
                            </li>
                            <li>
                            <input type="checkbox" name="number" />
                            <p>Include Numbers</p>
                            </li>
                            <li>
                            <input type="checkbox" name="symbols" />
                            <p>Include Symbols</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.showStrength}>
                        <p>STRENGTH</p>
                        <p>🟢🟢🟢🟢🟢🟢</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PassGen;