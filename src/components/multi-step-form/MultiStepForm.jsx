import React from 'react';
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';
import AddOns from './AddOns';

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
            </>
        )
    }
}

export default MultiStepForm;