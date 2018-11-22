import React, { Component } from 'react'
import './buyerform.css'
import { browserHistory } from 'react-router';
import { connect } from "react-redux"

import Midware from "../store/middleware";




function mapStateToProps(state) {
    return {

        allCurrencyData: state.allCurrency,
        getCurrencyState: state.getCurrency,
        escrowSuccess: state.startEscrow,
        escrowFail: state.escrowFailed

    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitEscrow: (userIdPass) => {
            dispatch(Midware.submitForm(userIdPass))
        },
        getCurrency: () => {
            dispatch(Midware.getAllCurrency())
        }
    }
}





class Buyerform extends Component {



    constructor() {
        super()
        this.state = {
            shouldHide: true,
            value: '',
            allCoinData: [],
            selectedCoinObj: {}
        }
    }

    demo = (event) => {

        this.setState({
            value: event.target.value
        });
        console.log(this.state.value)

        if (this.state.value !== 'select') {
            this.setState({
                shouldHide: false
            })
        } else {
            this.setState({
                shouldHide: true

            })
        }
    }

    componentWillMount() {
        setTimeout(() => {
            document.getElementById("sub").addEventListener("click", function (event) {
                event.preventDefault()
            });
        }, 500)
        this.props.getCurrency()
    }


    componentWillReceiveProps(prop) {

        if (prop.allCurrencyData[0] !== undefined) {
            this.setState({
                allCoinData: prop.allCurrencyData,
                selectedCoinObj: prop.allCurrencyData[0]
            })
        }

        if (prop.escrowSuccess === true) {
            document.getElementById('sub').click()
        }
    }

    submitForm = (ev) => {

        var buyerEmail = this.refs.buyerEmail.value
        var sellerEmail = this.refs.sellerEmail.value
        var amount = this.refs.amount.value
        var paidBy = this.refs.paidBy.value
        var currencyAddress = this.refs.currencyAddress.value
        var message = this.refs.message.value
        var buyerOrSeller = this.state.value



        if (buyerEmail !== '' && sellerEmail !== '' && amount !== '' && paidBy !== '' && currencyAddress !== '') {
            ev.preventDefault()
            // 


            var temp = []
            temp.push(this.state.selectedCoinObj)
            var detail = {
                buyerEmail: this.refs.buyerEmail.value,
                sellerEmail: this.refs.sellerEmail.value,
                amount: this.refs.amount.value,
                paidBy: this.refs.paidBy.value,
                currencyAddress: this.refs.currencyAddress.value,
                message: this.refs.message.value,
                buyer: this.state.value == 'buyer' ? true : false,
                seller: this.state.value == 'seller' ? true : false,
                amountType: temp,
                escrowType: 'regular',
            }

            this.props.submitEscrow(detail)


        }



    }



    proceed() {
        browserHistory.push('/')
    }


    handleChange(event) {
        // this.setState({value: event.target.value});
        var name = event.target.value

        this.state.allCoinData.map((m) => {

            if (m.currencyShort === name) {
                this.setState({
                    selectedCoinObj: m
                })
            }
        })
    }


    render() {
        return (
            <div>
                <div className={this.state.shouldHide ? 'center' : ''}>
                    <div className={this.state.shouldHide ? 'maindiv' : 'hidden'}>
                        <div className="mainheading">
                            Are you the Buyer or Seller?
                    </div>
                        <select className="selectclass" value={this.state.value} name="coins" onChange={this.demo}>
                            <option value="select">Select</option>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
                </div>
                <div className={this.state.shouldHide ? 'hidden' : 'container'} >
                    <div className="brand"><span>Coin</span> Grace</div>
                    <div className="wrapper animated bounceInLeft">
                        <div className="company-info">
                            <h3 >Terms and condition</h3>

                            <p className="terms">
                                CoinGrace does not rent out or sell your Personal Information. CoinGrace shares Personal Information
                                with third-parties only in connection with the Services provided to you, and only with selected trusted
                                third-party service providers. CoinGrace may also share Personal Information with law enforcement
                                agencies or arbitrators for legal or compliance reasons or in the event of a dispute.

                            </p>
                        </div>
                        <div className="contact">
                            <div className="welcom">Welcome to Escrow</div>

                            <form >
                                <p>
                                    <label>Buyer's Email</label>
                                    <input placeholder="Enter buyer email" type="email" name="buyermail" required ref='buyerEmail' />
                                </p>
                                <p>
                                    <label>Seller's Email</label>
                                    <input type="email" placeholder="Enter seller email" name="sellermail" required ref='sellerEmail' />
                                </p>

                                <p>
                                    <label>Amount</label>
                                    <input type="number" placeholder="Enter amount" name="amount" required ref='amount' />
                                </p>

                                <p>
                                    <label>Amount type</label>
                                    <select className="selectclass" name="coins" onChange={this.handleChange.bind(this)}>
                                        {
                                            this.state.allCoinData.map((obj, index) => {
                                                return (
                                                    <option value={obj.currencyShort} key={index} >{obj.currencyShort} ({obj.currencyName})</option>
                                                )
                                            })
                                        }


                                    </select>
                                </p>
                                <p>
                                    <label>The fee will be paid by ?</label>
                                    <select className="selectclass" name="coins" ref='paidBy' >
                                        <option value="Buyer">Buyer</option>
                                        <option value="Seller">Seller</option>

                                    </select>
                                </p>

                                <p className="full">
                                    <label>Seller's BTC Address</label>
                                    <input type="text" placeholder="Enter address" name="address" required ref='currencyAddress' />
                                </p>
                                <p className="full">
                                    <label>Message</label>
                                    <textarea name="message" placeholder="Enter message" rows="2" ref='message'></textarea>
                                </p>
                                <p className="full">
                                    <button onClick={this.submitForm.bind(this)} >Submit
                                    </button>
                                    <button data-toggle="modal" data-target='#exampleModalCenter' id='sub' style={{ display: "none" }} ></button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                <div data-backdrop='static' className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Successfully Started Escrow</h5>


                            </div>
                            <div className="modal-body">
                                You will receive transiction details shortly via provided email address.
                                </div>
                            <div className="modal-footer">

                                <button type="button" data-dismiss="modal" className="btn btn-primary" onClick={this.proceed.bind(this)}>Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buyerform);