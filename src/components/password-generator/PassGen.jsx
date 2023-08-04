// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import styles from "../../assets/styles/pass-gen/passGen.module.scss"
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
            <div className={styles.div}>
                <p>ok</p>
            </div>
        )
    }
}

export default PassGen;