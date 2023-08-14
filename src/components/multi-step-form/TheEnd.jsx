import React from "react";
import styles from "../../assets/styles/multi-step-form/multiStep.module.scss";
import thankyouIcon from "../../assets/images/multi-step-form/icons/icon-thank-you.svg";
class TheEnd extends React.Component {
  render() {
    return (
      <div className={styles.theend}>
        <img src={thankyouIcon} alt="thankyou" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need suppor, please feel free to
          email us at support hossinrg1380@gmail.com
        </p>
      </div>
    );
  }
}

export default TheEnd;
