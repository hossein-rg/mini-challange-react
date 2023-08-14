import React from "react";
import styles from "../../assets/styles/multi-step-form/multiStep.module.scss";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import FinishingUp from "./FinishingUp";
import TheEnd from "./TheEnd";

class MultiStepForm extends React.Component {
  constructor(props) {
    super(props);
    this.btnBack = React.createRef();
    this.btnNext = React.createRef();
    this.stepSelector = React.createRef();
    this.state = {
      whereLocate: 0,
      checkedFullname: false,
      checkedEmail: false,
      checkedPhone: false,
      planMonth: false,
      planSelect: "",
      addOns_os: false,
      addOns_ls: false,
      addOns_cp: false,
    };
  }

  checkPersonalInfo = (how, data) => {
    if (how == "name") {
      console.log(data);
      this.setState({
        checkedFullname: data,
      });
    } else if (how == "email") {
      console.log(data);
      this.setState({
        checkedEmail: data,
      });
    } else if (how == "phone") {
      console.log(data);
      this.setState({
        checkedPhone: data,
      });
    }
  };

  checkSelectPlan = (statusMonth, plan) => {
    this.setState({
      planMonth: statusMonth,
      planSelect: plan,
    });
  };

  checkSelectAddons = (os, ls, cp) => {
    this.setState({
      addOns_os: os,
      addOns_ls: ls,
      addOns_cp: cp,
    });
  };

  setstateNextBtn = () => {
    let backBtn = this.btnBack.current;
    let nextBtn = this.btnNext.current;
    let elementSelector = this.stepSelector.current.children;
    nextBtn.innerHTML = "Next Step";
    nextBtn.style.backgroundColor = "";
    nextBtn.style.display = "block";
    backBtn.style.display = "block";
    this.setState(
      {
        whereLocate: this.state.whereLocate + 1,
      },
      () => {
        if (this.state.whereLocate == 3) {
          nextBtn.innerHTML = "Confirm";
          nextBtn.style.backgroundColor = "teal";
        } else if (this.state.whereLocate == 4) {
          backBtn.style.display = "none";
          nextBtn.style.display = "none";
        } else {
          elementSelector[this.state.whereLocate].children[0].style.backgroundColor = "white";
        }
      }
    );
  };

  dataStep = [
    {
      id: 1,
      step: "STEP 1",
      detail: "YOUR INFO",
    },
    {
      id: 2,
      step: "STEP 2",
      detail: "SELECT PLAN",
    },
    {
      id: 3,
      step: "STEP 3",
      detail: "ADD-ONS",
    },
    {
      id: 4,
      step: "STEP 4",
      detail: "SUMMARY",
    },
  ];

  render() {
    const clickWherePage = (e) => {
      let element = e.target.dataset.click;
      let backBtn = this.btnBack.current;
      let elementSelector = this.stepSelector.current.children;
      elementSelector[this.state.whereLocate].children[0].style.backgroundColor = "transparent";
      if (element == 0) {
        if (this.state.whereLocate == 1) {
          backBtn.style.display = "none";
          this.setState({
            checkedFullname: false,
            checkedEmail: false,
            checkedPhone: false,
          });
        }
        this.setState(
          {
            whereLocate: this.state.whereLocate - 1,
          },
          () => {
            elementSelector[this.state.whereLocate].children[0].style.backgroundColor = "white";
          }
        );
      } else {
        if (this.state.whereLocate == 0) {
          this.state.checkedFullname && this.state.checkedEmail && this.state.checkedPhone
            ? this.setstateNextBtn()
            : (elementSelector[this.state.whereLocate].children[0].style.backgroundColor = "white");
        } else if (this.state.whereLocate == 1) {
          this.state.planSelect != ""
            ? this.setstateNextBtn()
            : (elementSelector[this.state.whereLocate].children[0].style.backgroundColor = "white");
        } else if (this.state.whereLocate == 2) {
          this.state.checkedFullname && this.state.checkedEmail && this.state.checkedPhone
            ? this.setstateNextBtn()
            : (elementSelector[this.state.whereLocate].children[0].style.backgroundColor = "white");
        } else if (this.state.whereLocate == 3) {
          this.state.checkedFullname && this.state.checkedEmail && this.state.checkedPhone
            ? this.setstateNextBtn()
            : (elementSelector[this.state.whereLocate].children[0].style.backgroundColor = "white");
        }
      }
    };

    const { whereLocate, planSelect, planMonth, addOns_cp, addOns_ls, addOns_os } = this.state;
    return (
      <div className={styles.mainApp}>
        <div className={styles.stepsSidebar}>
          <div ref={this.stepSelector} className={styles.stepsSidebar_}>
            {this.dataStep.map((data, i) => {
              return (
                <div key={i} className={styles.stepsSidebar_counter}>
                  <div className={styles.numberStep}>{data.id}</div>
                  <div className={styles.detailStep}>
                    <span>{data.step}</span>
                    <p>{data.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.rightside} style={{ width: "70%" }}>
          {whereLocate == 0 ? <PersonalInfo check={this.checkPersonalInfo} /> : <></>}
          {whereLocate == 1 ? <SelectPlan check={this.checkSelectPlan} /> : <></>}
          {whereLocate == 2 ? <AddOns check={this.checkSelectAddons} /> : <></>}
          {whereLocate == 3 ? <FinishingUp plan={[planSelect, planMonth]} addons={[addOns_os, addOns_ls, addOns_cp]} /> : <></>}
          {whereLocate > 3 ? <TheEnd /> : <></>}
          <div className={styles.handleBtns}>
            <button ref={this.btnNext} data-click="1" onClick={clickWherePage}>
              Next Step
            </button>
            <button style={{ display: "none" }} ref={this.btnBack} data-click="0" onClick={clickWherePage}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MultiStepForm;
