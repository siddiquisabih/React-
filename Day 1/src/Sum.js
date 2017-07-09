import React, { Component } from "react"
class To extends Component {

    constructor() {
        super()
        this.state = {
            Sumstate1: 0,
            Sumstate2: 0,
        }
    }
    SumValue() {
        let a = this.refs.f1.value
        let b = this.refs.f2.value
        let ans = parseInt(a) + parseInt(b)

        this.setState({
            Sumstate1: ans
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.Sumstate1}
                </h1>
                <br />
                <input type="number"
                    placeholder="First Value"
                    ref="f1"
                    />
                <br />
                <input type="number"
                    placeholder="Second Value"
                    ref="f2"
                    />
                <br />
                <button onClick={this.SumValue.bind(this)} >For Sum</button>
            </div>
        )
    }
}
export default To