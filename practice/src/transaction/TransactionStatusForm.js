import React, { Component } from 'react'

import "./TransactionStatusForm.css"
export default class TransactionStatusForm extends Component {
    render() {
        return (
            <div>
                <div className='container' >
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
                            <div className="welcom">View Transaction</div>
                            <div className="headings">
                                Current Status:
                            </div>
                            <div>
                                The buyer has not funded the escrow transaction yet
                            </div>
                            <div className="borderr">

                            </div>
                            <div className="headings">
                                Details
                            </div>
                            <div className="text">
                                Transaction ID: 43644438584456d6724bdfe87dcc94493f23880bc1060eeba
                            </div>
                            <div className="escrowType">
                                Escrow type: Regular Escrow
                            </div>
                            <div>
                                <table className="table">
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th>BTC</th>
                                    </tr>
                                    <tr>
                                        <td>Amount Due</td>
                                        <td>99.00000000</td>

                                    </tr>
                                    <tr>
                                        <td>Fee Due</td>
                                        <td>0.99000000</td>

                                    </tr>
                                    <tr className="lastRow">
                                        <td>Total Due</td>
                                        <td>99.99000000</td>

                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className="text">
                                * Any Multisignature transactions fees are rounded up to a minimum of 0.0001 BTC
                            </div>
                            <div className="escrowType">
                                Goods or services being sold: Goods
                            </div>
                            <div className="borderr">

                            </div>
                            <div className="headings">

                                Buyer(You)
                            </div>
                            <div className="text">
                                Email:email@example.com
                            </div>
                            <div className="borderr">

                            </div>
                            <div className="headings">

                                Seller:
                            </div>
                            <div className="text">
                                Email: email@example.com
                            </div>
                            <div>
                                Bitcoin address: 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2
                            </div>
                            <div className="borderr">

                            </div>
                            <div className="text">
                                Please confirm the sellers bitcoin address: 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2
                            </div>
                            <div className="roundbtn">

                                <a href="#" className="a-btn">
                                    <span className="a-btn-text">Pay Invoice</span> 
                                    <span className="a-btn-slide-text">Hurry Up !</span>
                                    <span className="a-btn-icon-right"><span></span></span>
                                </a>
                            </div>
                            <div className="borderr">

                            </div>
                            <div className="cancelbtn">
                                <button>Cancel Escrow</button>
                            </div>

                            <div className="messagesent">
                                <div>
                                    email@example.com
                                </div>
                                <div className="message">
                                    message typed by buyer when buying
                                </div>
                                <div>
                                    11/11/2018  12:03:03 pm
                                </div>
                            </div>
                            <form >
                                <p className="full">
                                    <label>Message</label>
                                    <textarea name="message" placeholder="Enter message" rows="6" ref='message'></textarea>
                                </p>
                                <p className="full">
                                    <button >Send Message
                                    </button>
                                    {/* <button data-toggle="modal" data-target='#exampleModalCenter' id='sub' style={{ display: "none" }} ></button> */}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
