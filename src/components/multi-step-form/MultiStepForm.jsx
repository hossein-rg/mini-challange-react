import React from 'react';
// import styles from "../../assets/styles/multi-step-form/multiStep.module.scss";
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import AddOns from './AddOns';
import FinishingUp from './FinishingUp';

class MultiStepForm extends React.Component{
    constructor(props){
        super(props);
        this.btnBack = React.createRef();
        this.btnNext = React.createRef();
        this.state = {
            whereLocate : 0,
            checkedFullname : false,
            checkedEmail : false,
            checkedPhone : false
        }
    }

    checkPersonalInfo = (how,data)=>{
        if(how == "name"){
            console.log(data)
            this.setState({
                checkedFullname : data,
            })
        }
        else if(how == "email"){
            console.log(data)
            this.setState({
                checkedEmail: data,
                });
        }
        else if(how == "phone"){
            console.log(data)
            this.setState({
                checkedPhone :data,
            })
        }
    }

    clickWherePage = (e)=>{
        let element = e.target.dataset.click;
        let backBtn = this.btnBack.current;
        if(element == 0){
            if(this.state.whereLocate == 1){
                backBtn.style.display = "none";
            }
        this.setState({
            whereLocate : this.state.whereLocate - 1,
        })
        }else{
            if(this.state.whereLocate == 0){
                if(this.state.checkedFullname && this.state.checkedEmail && this.state.checkedPhone){
                    backBtn.style.display = "block";
                    this.setState({
                        whereLocate : this.state.whereLocate + 1,
                    })
                }
            }
        }
    }

    render(){
        const {whereLocate} = this.state;
        return(
            <div>
            {whereLocate == 0 ? <PersonalInfo check = {this.checkPersonalInfo}/> : <></>}
            {whereLocate == 1 ? <SelectPlan /> : <></>}
            {whereLocate == 2 ? <AddOns /> : <></>}
            {whereLocate == 3 ? <FinishingUp /> : <></>}
            {whereLocate == 4 ? <FinishingUp /> : <></>}
            <button style={{display:"none"}} ref={this.btnBack} data-click="0" onClick={this.clickWherePage}>Go Back</button>
            <button ref={this.btnNext} data-click="1" onClick={this.clickWherePage}>Next Step {whereLocate}</button>
            </div>
        )
    }
}

export default MultiStepForm;