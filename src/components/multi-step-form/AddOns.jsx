import React from "react";
import styles from "../../assets/styles/multi-step-form/multiStep.module.scss";
class AddOns extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.div_addOns}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <div className={styles.box_selectAddons}>
          <div className={styles.AddOnsDetail}>
            <input type="checkbox" name="online-service" />
            <div>
              <p>Online service</p>
              <span>Access to multiplayer games</span>
            </div>
            <p>+$1/mo</p>
          </div>
          <div className={styles.AddOnsDetail}>
            <input type="checkbox" name="larger-storage" />
            <div>
              <p>Larger storage</p>
              <span>Extra 1TB of cloud save</span>
            </div>
            <p>+$2/mo</p>
          </div>
          <div className={styles.AddOnsDetail}>
            <input type="checkbox" name="costumize-profile" />
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
