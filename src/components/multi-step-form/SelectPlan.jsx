import React from "react";
import styles from "../../assets/styles/multi-step-form/multiStep.module.scss";
import arcadeIcon from "../../assets/images/multi-step-form/icons/icon-arcade.svg";
import advancedIcon from "../../assets/images/multi-step-form/icons/icon-advanced.svg";
import proIcon from "../../assets/images/multi-step-form/icons/icon-pro.svg";
class SelectPlan extends React.Component {
  constructor(props) {
    super(props);
    this.selectionMonthYear = React.createRef();
    this.refArcade = React.createRef();
    this.refAdvanced = React.createRef();
    this.refPro = React.createRef();
    this.state = {
      planSelected: "",
      month: true,
      arcade: "$9/mo",
      advanced: "$12/mo",
      pro: "$15/mo",
    };
  }

  clickSelectPlanBox = (e) => {
    if (e == 1) {
      // eslint-disable-next-line react/prop-types
      return this.props.check(this.state.month, this.state.planSelected);
    } else {
      const element = e.target;
      this.refArcade.current.style.backgroundColor = "white";
      this.refAdvanced.current.style.backgroundColor = "white";
      this.refPro.current.style.backgroundColor = "white";
      element.style.backgroundColor = "rgb(199, 255, 251)";

      this.setState(
        {
          planSelected: element.dataset.plan,
        },
        () => {
          // eslint-disable-next-line react/prop-types
          return this.props.check(this.state.month, this.state.planSelected);
        }
      );
    }
  };

  render() {
    let { arcade, advanced, pro } = this.state;

    const clickSelectionbar = () => {
      const elementBtn = this.selectionMonthYear.current;
      this.setState(
        {
          month: this.state.month ? false : true,
        },
        () => {
          this.clickSelectPlanBox(1);
          if (this.state.month) {
            elementBtn.className = `${styles.inputSelection}`;
            this.setState({
              arcade: "$9/mo",
              advanced: "$12/mo",
              pro: "$15/mo",
            });
          } else {
            elementBtn.className = `${styles.inputSelection} ${styles.inputSelectionYear}`;
            this.setState({
              arcade: "$85/ye",
              advanced: "$115/ye",
              pro: "$140/ye",
            });
          }
        }
      );
    };

    return (
      <div className={styles.div_selectPlan}>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <div className={styles.box_selectPlan}>
          <div ref={this.refArcade} data-plan="arcade" onClick={this.clickSelectPlanBox}>
            <img src={arcadeIcon} alt="arcade" />
            <p>Arcade</p>
            <span>{arcade}</span>
          </div>
          <div ref={this.refAdvanced} data-plan="advanced" onClick={this.clickSelectPlanBox}>
            <img src={advancedIcon} alt="advanced" />
            <p>Advanced</p>
            <span>{advanced}</span>
          </div>
          <div ref={this.refPro} data-plan="pro" onClick={this.clickSelectPlanBox}>
            <img src={proIcon} alt="pro" />
            <p>Pro</p>
            <span>{pro}</span>
          </div>
        </div>
        <div className={styles.selectYorM}>
          <p>Monthly</p>
          <div
            onClick={clickSelectionbar}
            onChange={this.clickSelectPlanBox}
            ref={this.selectionMonthYear}
            className={styles.inputSelection}
          ></div>
          <p>Yearly</p>
        </div>
      </div>
    );
  }
}

export default SelectPlan;
