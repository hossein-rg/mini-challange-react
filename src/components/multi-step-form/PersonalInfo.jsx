import React from "react";
import styles from "../../assets/styles/multi-step-form/multiStep.module.scss";
class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.inputEmail = React.createRef();
    this.inputPhone = React.createRef();
  }

  setErrorOrSend(checkValue, input, target) {
    if (checkValue === false) {
      input.style.border = "red solid 1.5px";
      input.nextSibling.style.display = "block";
      // eslint-disable-next-line react/prop-types
      return this.props.check(target, checkValue);
    } else {
      input.style.border = "";
      input.nextSibling.style.display = "none";
      // eslint-disable-next-line react/prop-types
      return this.props.check(target, checkValue);
    }
  }

  render() {
    const clickCheckInputs = (e) => {
      let dataset = e.target.dataset.set;
      const value = e.target.value.toLowerCase();

      if (dataset == "name") {
        const checkValue = /^[a-z]*$/g.test(value);
        this.setErrorOrSend(checkValue, this.inputName.current, "name");
      } else if (dataset == "email") {
        const checkValue =
          // eslint-disable-next-line no-useless-escape
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        this.setErrorOrSend(checkValue, this.inputEmail.current, "email");
      } else if (dataset == "phone") {
        const checkValue = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(value);
        this.setErrorOrSend(checkValue, this.inputPhone.current, "phone");
      }
    };

    return (
      <div className={styles.div_PersonalInfo}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <div className={styles.form_PersonalInfo}>
          <form>
            <div>
              <label>Your name</label>
              <input
                onChange={clickCheckInputs}
                ref={this.inputName}
                type="text"
                name="name"
                required
                placeholder="e.g. Hossein"
                data-set="name"
              />
              <span>Enter your name</span>
            </div>
            <div>
              <label>Email Address</label>
              <input
                onChange={clickCheckInputs}
                ref={this.inputEmail}
                data-set="email"
                type="email"
                name="email"
                required
                placeholder="e.g. hosseinrg@gmail.com"
              />
              <span>Enter your email accurately</span>
            </div>
            <div>
              <label>Phone Number</label>
              <input
                onChange={clickCheckInputs}
                ref={this.inputPhone}
                data-set="phone"
                type="tel"
                name="tel"
                required
                placeholder="e.g. 09123331210"
              />
              <span>Incorrect phone number</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
