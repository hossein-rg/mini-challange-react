import React from 'react';
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import AddOns from './AddOns';
import FinishingUp from './FinishingUp';

class MultiStepForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <PersonalInfo />
            <SelectPlan />
            <AddOns />
            <FinishingUp />
            </>
        )
    }
}

export default MultiStepForm;