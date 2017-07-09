import React, { Component } from "react"

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            bob: ""
        }
    }


    az() {
        this.setState({
            bob: this.refs.azher.value
        })
    }

    render() {
        return (

            <div>

                <input type="text"
                    placeholder="enter Name"
                    ref="azher"
                    />

                <br />

                <button onClick={this.az.bind(this)} >click me </button>

                <h1>
                    {this.state.bob}</h1>

            </div>
        )



    }



}
export default Todo 