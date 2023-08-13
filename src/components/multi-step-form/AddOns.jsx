import React from "react";
import styles from "../../assets/styles/multi-step-form/multiStep.module.scss";
class AddOns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      os: false,
      ls: false,
      cp: false,
    };
  }

  passData = () => {
    const { os, ls, cp } = this.state;
    // eslint-disable-next-line react/prop-types
    return this.props.check(os, ls, cp);
  };

  render() {
    const clickAddOns = (e) => {
      let targetElement = e.target.dataset.addons;
      let valueElement = e.target.checked;
      targetElement == "os"
        ? this.setState({ os: valueElement }, () => {
            this.passData();
          })
        : 1;
      targetElement == "ls"
        ? this.setState({ ls: valueElement }, () => {
            this.passData();
          })
        : 1;
      targetElement == "cp"
        ? this.setState({ cp: valueElement }, () => {
            this.passData();
          })
        : 1;
    };
    return (
      <div className={styles.div_addOns}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <div className={styles.box_selectAddons}>
          <div className={styles.AddOnsDetail}>
            <input onChange={clickAddOns} type="checkbox" name="online-service" data-addons="os" />
            <div>
              <p>Online service</p>
              <span>Access to multiplayer games</span>
            </div>
            <p>+$1/mo</p>
          </div>
          <div className={styles.AddOnsDetail}>
            <input onChange={clickAddOns} type="checkbox" name="larger-storage" data-addons="ls" />
            <div>
              <p>Larger storage</p>
              <span>Extra 1TB of cloud save</span>
            </div>
            <p>+$2/mo</p>
          </div>
          <div className={styles.AddOnsDetail}>
            <input onChange={clickAddOns} type="checkbox" name="costumize-profile" data-addons="cp" />
            <div>
              <p>customizable profile</p>
              <span>custom theme on your profile</span>
            </div>
            <p>+$2/mo</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AddOns;
