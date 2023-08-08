import React from 'react';
import PersonalInfo from './PersonalInfo';
import SelectPlan from './SelectPlan';

class MultiStepForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <PersonalInfo />
            <SelectPlan />
            </>
        )
    }
}

export default MultiStepForm;