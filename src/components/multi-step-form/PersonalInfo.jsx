import React from 'react';
import styles from '../../assets/styles/multi-step-form/multiStep.module.scss';
class PersonalInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.div_PersonalInfo}>
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                <div className={styles.form_PersonalInfo}>
                    <form>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" required placeholder="e.g. Hossein Rg"/>
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type="email" name="email" required placeholder="e.g. hosseinrg@gmail.com"/>
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input type="tel" name="tel" required placeholder="e.g. +98 990 999 90 90"/>
                        </div>
                        {/* <input type="submit" value="Next Step" /> */}
                    </form>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;