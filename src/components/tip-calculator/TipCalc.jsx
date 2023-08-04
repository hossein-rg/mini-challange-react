// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import Top from './top/Top';
// import left side
import Bill from './section-left/Bill';
import Tip from './section-left/Tip';
import People from './section-left/People';
// import right side
import AmountTotal from './section-right/AmountTotal';
import "../../assets/styles/tip-calc/tipCalc.scss"
class TipCalc extends Component{
    constructor(props){
        super(props);
        this.state={
            people:0,
            bill:0,
            tip:0
        }
    }
    cbPeople=(dataPeople)=>{
        this.setState({
            people:dataPeople,
        })
    }
    cbBill=(dataBill)=>{
        this.setState({
            bill:dataBill,
        })
    }
    cbTip=(dataTip)=>{
        this.setState({
            tip:dataTip,
        })
    }
    render(){

    return(
        <div className='body'>
        <div className='top'>
            <Top />
        </div>
        <div className='section'>
        <div className='section-left'>
                <Bill callBackBill = {this.cbBill}/>
                <Tip callBackTip = {this.cbTip}/>
                <People  callBackPeople={this.cbPeople} />
            </div>
            <div className='section-right'>
                <AmountTotal  people = {this.state.people} tip = {this.state.tip} bill = {this.state.bill}/>
            </div>
        </div>
        </div>
    )
    }
}

export default TipCalc;