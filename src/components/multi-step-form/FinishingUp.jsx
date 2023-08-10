import React from 'react';
import styles from "../../assets/styles/multi-step-form/multiStep.module.scss"
class FinishingUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            formYearOrMonth : true,
        }
    }

    formSelectPlan = "Arcade";
    formSelectPlanPrice = 9;
    formAddOns = [true,true,true];
    dataAddOns =[
        {
            dt:"Online service",
            mo:"+$1/mo",
            yr:"+$10/yr",
            moPrice:1,
            yrPrice:10
        },
        {
            dt:"Larger storage",
            mo:"+$2/mo",
            yr:"+$20/yr",
            moPrice:2,
            yrPrice:20
        },
        {
            dt:"Custumize profile",
            mo:"+$2/mo",
            yr:"+$20/yr",
            moPrice:2,
            yrPrice:20
        },
    ];

    calcTotalPrice = ()=>{
        let total = 0;
        this.formAddOns.map((value,i)=>{
            if(this.state.formYearOrMonth)
            value? total += this.dataAddOns[i].moPrice : 0;
            else
            value? total += this.dataAddOns[i].yrPrice : 0;
        })
        this.state.formYearOrMonth ? total += this.formSelectPlanPrice :total += this.formSelectPlanPrice * 10;
        return total;
    }

    clickChangeYearMonth = ()=>{
        this.setState({
            formYearOrMonth:(this.state.formYearOrMonth)? false : true,
        })
    }

    render(){

        return(
            <div className={styles.div_finishingUp}>
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
                <div className={styles.box_finishingUp}>
                    <div className={styles.box_finishingUp_changePlan}>
                        <div>
                            <p>{`${this.formSelectPlan} ${this.state.formYearOrMonth ? "(monthly)" : "(yearly)"}`} </p>
                            <p onClick={this.clickChangeYearMonth}>Change</p>
                        </div>
                        <p>${this.state.formYearOrMonth ?this.formSelectPlanPrice : this.formSelectPlanPrice * 10}/{this.state.formYearOrMonth ? "mo" : "yr"}</p>
                    </div>
                    <div className={styles.box_finishingUp_addOns}>
                        {this.formAddOns.map((value,i)=>{
                            if(value){
                            return (<div key={i}>
                                <p>{this.dataAddOns[i].dt}</p>
                                {this.state.formYearOrMonth ? <span>{this.dataAddOns[i].mo}</span> : <span>{this.dataAddOns[i].yr}</span> }
                            </div>)
                            }
                        })}
                    </div>
                </div>
                <div className={styles.box_finishingUp_totalValue}>
                        <p>{this.state.formYearOrMonth ? "Total (per month)" : "Total (per year)"}</p>
                        <span>${this.calcTotalPrice()}/{this.state.formYearOrMonth ? "mo" : "yr"}</span>
                    </div>
            </div>
        )
    }
}

export default FinishingUp;