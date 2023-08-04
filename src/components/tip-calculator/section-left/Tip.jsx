// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

class Tip extends Component{
    constructor(props){
        super(props);
        this.state={
            tip:0,
        }
    }
    btnTip = [{id:0,val:5},{id:1,val:10},{id:2,val:15},{id:3,val:25},{id:4,val:50},{id:5,val:'Custom'}]
    btns = this.btnTip.map(function(btnTip){
        if(btnTip.id !== 5)
        return <button key={btnTip.id} className="TipBtn">{btnTip.val}</button>
        else{
            return <input key={btnTip.id} placeholder="Custom" className="InputTipBtn remove-spin" type="number"></input>
        }
    },this);
    handleClickBtn=(element)=>{
        this.setState({
            tip: element.target.outerText || element.target.value || 0,
        },()=>{
                    // eslint-disable-next-line react/prop-types
        this.props.callBackTip(this.state.tip);
        })

        const target = element.target;
        if(target.classList.value === 'TipBtn'){
            const ele = target.parentElement.children;
            for (let item of ele){
                if(item.className === 'TipBtn'){
                    item.style.backgroundColor = "";
                    item.style.color = "";
                }
            }
            target.style.backgroundColor = "rgb(0, 182, 182)";
            target.style.color = "rgb(0, 83, 83)";
            // alert cant be zero
            // eslint-disable-next-line no-inner-declarations
            function checkZero(elem,alert){
                if(elem.value === '0' || elem.value === ''){
                    alert.style.display = "block";
                    elem.style.border = "solid 2px rgba(255, 72, 72, 0.842)";
                }
                else{
                    AlertPeople.style.display="none";
                    people.style.border ="solid 2px rgb(0, 182, 182)"
                }
            }
            const people = document.querySelector('.inputPeople');
            const bill = document.querySelector('.inp-bill');
            const AlertBill = document.querySelector('.cantzero');
            const AlertPeople = document.querySelector('.cantzero2');
            checkZero(people,AlertPeople);
            checkZero(bill,AlertBill);
        }
    }
    render(){
    return(
        <div className="TipBox leftSide-box">
        <p className='leftSide-p'>Select Tip %</p>
        <div className="TipBtns" onClick={this.handleClickBtn} >
            {this.btns}
        </div>
        </div>
    )
    }
}

export default Tip;