/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import dollarSign from '../../../assets/images/tip-calc/icon-dollar.svg';
class AmountTotal extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {tip,people,bill} = this.props;
        const checkPeople = people > 0 ? people : 1;
        const tipAmount = bill * (tip/100);
        const personTip = (tipAmount + bill)/checkPeople;
        const total = tipAmount / checkPeople || tipAmount;
    return(
        <>
            <div className='RightBox-Amount'>
                <div className='RightBox-Amount-title'>
                <p>Tip Amount</p>
                <p>/ person</p>
                </div>
                <div className='RightBox-Amount-price'>
                    <img src={dollarSign} alt='dollarSign'/>
                    <p>{total.toFixed(2)}</p>
                </div>
            </div> 
            <div className='RightBox-Total'>
            <div className='RightBox-Total-title'>
                <p>Total</p>
                <p>/ person</p>
                </div>
                <div className='RightBox-Total-price'>
                    <img src={dollarSign} alt='dollarSign'/>
                    <p>{personTip.toFixed(2)}</p>
                </div>
            </div> 
            <button className='reset-amount' type="submit">RESET</button>
        </>
    )
    }
}

export default AmountTotal;