import React from 'react';
import styles from '../../assets/styles/multi-step-form/multiStep.module.scss';
class PersonalInfo extends React.Component{
    constructor(props){
        super(props);
        this.inputName = React.createRef();
        this.state={
            nameValue:"",
        }
    }


    clickCheckInputs = (e)=>{
        let dataset = e.target.dataset.set;
        const value = e.target.value.toLowerCase();
        if(dataset == "name"){
            const checkValue = /^[a-z]*$/g.test(value)
            // eslint-disable-next-line react/prop-types
            return this.props.check("name",checkValue);
        }
        else if(dataset == "email"){
            // eslint-disable-next-line no-useless-escape
            const checkValue = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
            // eslint-disable-next-line react/prop-types
            return this.props.check("email",checkValue);
        }
        else if(dataset == "phone"){
            const checkValue = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(value);
            // eslint-disable-next-line react/prop-types
            return this.props.check("phone",checkValue)
        }
    }

    render(){
        return(
            <div className={styles.div_PersonalInfo}>
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                <div className={styles.form_PersonalInfo}>
                    <form>
                        <div>
                            <label>Your name</label>
                            <input onChange={this.clickCheckInputs} ref={this.inputName} type="text" name="name" required placeholder="e.g. Hossein" data-set="name"/>
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input onChange={this.clickCheckInputs} data-set="email" type="email" name="email" required placeholder="e.g. hosseinrg@gmail.com"/>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input onChange={this.clickCheckInputs} data-set="phone" type="tel" name="tel" required placeholder="e.g. 09123331210"/>
                        </div>
                        {/* <input type="submit" value="Next Step" /> */}
                    </form>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;