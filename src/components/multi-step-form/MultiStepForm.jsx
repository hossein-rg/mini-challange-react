import React from 'react';
import PersonalInfo from './PersonalInfo';

class MultiStepForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <PersonalInfo />
        )
    }
}

export default MultiStepForm;