import React from 'react'
import styles from '../../assets/styles/multi-step-form/multiStep.module.scss'
import arcadeIcon from '../../assets/images/multi-step-form/icons/icon-arcade.svg'
import advancedIcon from '../../assets/images/multi-step-form/icons/icon-advanced.svg'
import proIcon from '../../assets/images/multi-step-form/icons/icon-pro.svg'
class SelectPlan extends React.Component {
    constructor(props) {
        super(props)
        this.selectionMonthYear = React.createRef()
        this.state = {
            month: true,
            arcade: '$9/mo',
            advanced: '$12/mo',
            pro: '$15/mo',
        }
    }

    clickSelectionbar = () => {
        const elementBtn = this.selectionMonthYear.current
        this.setState(
            {
                month: this.state.month ? false : true,
            },
            () => {
                if (this.state.month) {
                    elementBtn.className = `${styles.inputSelection}`
                    this.setState({
                        arcade: '$9/mo',
                        advanced: '$12/mo',
                        pro: '$15/mo',
                    })
                } else {
                    elementBtn.className = `${styles.inputSelection} ${styles.inputSelectionYear}`
                    this.setState({
                        arcade: '$85/ye',
                        advanced: '$115/ye',
                        pro: '$140/ye',
                    })
                }
            }
        )
    }

    render() {
        let { arcade, advanced, pro } = this.state

        return (
            <div className={styles.div_selectPlan}>
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing</p>
                <div className={styles.box_selectPlan}>
                    <div>
                        <img src={arcadeIcon} alt="arcade" />
                        <p>Arcade</p>
                        <span>{arcade}</span>
                    </div>
                    <div>
                        <img src={advancedIcon} alt="advanced" />
                        <p>Advanced</p>
                        <span>{advanced}</span>
                    </div>
                    <div>
                        <img src={proIcon} alt="pro" />
                        <p>Pro</p>
                        <span>{pro}</span>
                    </div>
                </div>
                <div className={styles.selectYorM}>
                    <p>Monthly</p>
                    <div
                        onClick={this.clickSelectionbar}
                        ref={this.selectionMonthYear}
                        className={styles.inputSelection}
                    ></div>
                    <p>Yearly</p>
                </div>
            </div>
        )
    }
}

export default SelectPlan
