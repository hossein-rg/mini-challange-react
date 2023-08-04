// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import personSvg from '../../../assets/images/tip-calc/icon-person.svg'
class People extends Component{
    constructor(props){
        super(props);
        this.state={
            numberPeople:1,
        }
    }
    handleClick=(ele)=>{
        const inputPeople = document.querySelector('.cantzero2');
        if(Number(ele.target.value) === 0){
            ele.target.style.border = "solid 2px rgba(255, 72, 72, 0.842)";
            inputPeople.style.display="block";
        }
        else{
            ele.target.style.border = "solid 2px rgb(0, 182, 182)"
            inputPeople.style.display="none";
        }
        // eslint-disable-next-line react/prop-types
        this.setState({
            numberPeople:ele.target.value
        },()=>{
        // eslint-disable-next-line react/prop-types
        this.props.callBackPeople(Number(this.state.numberPeople))
        })
    }

render(){
    return(
        <div className="PeopleBox leftSide-box">
            <p className='leftSide-p'>Number of People</p>
            <div className="PeopleBox-input">
            <img src={personSvg} alt="dolar-sign" />
        <input onKeyUp={this.handleClick} className='remove-spin inputPeople' type="number" name="valueBill" id="valueBill" placeholder="0"/>
        <p className='cantzero2'>cant be zero</p>
            </div>
        </div>
    )
}
}

export default People;