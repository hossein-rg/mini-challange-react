// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import dollarSvg from '../../../assets/images/tip-calc/icon-dollar.svg'
class Bill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bill: 0,
        }
    }

    handleClick = (ele) => {
        this.setState(
            {
                bill: ele.target.value,
            },
            () => {
                // eslint-disable-next-line react/prop-types
                this.props.callBackBill(Number(this.state.bill))
            }
        )
        const inputBill = document.querySelector('.cantzero')
        if (Number(ele.target.value) === 0) {
            ele.target.style.border = 'solid 2px rgba(255, 72, 72, 0.842)'
            inputBill.style.display = 'block'
        } else {
            ele.target.style.border = 'solid 2px rgb(0, 182, 182)'
            inputBill.style.display = 'none'
        }
    }
    render() {
        return (
            <div className="BillBox leftSide-box">
                <p className="leftSide-p">Bill</p>
                <div className="BillBox-input">
                    <img src={dollarSvg} alt="dolar-sign" />
                    <input
                        onKeyUp={this.handleClick}
                        className="remove-spin inp-bill"
                        type="number"
                        name="valueBill"
                        id="valueBill"
                        placeholder="0"
                    />
                    <p className="cantzero">cant be zero</p>
                </div>
            </div>
        )
    }
}

export default Bill
