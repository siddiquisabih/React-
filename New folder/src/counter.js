import React, { Component } from "react"


class Counter extends Component {
    constructor() {
        super()
        this.state = {

            initialstate: 0

        }
    }
    increament() {

        this.setState({
            initialstate: 
            this.state.initialstate + 1
        })
    }
    decreament() {
        

if (this.state.initialstate===0){
alert("your value is less then 0")
}
else{
this.setState({
            initialstate: 
            this.state.initialstate -1

        })
}


    }

    render() {
        return (
            <div>

                {this.state.initialstate}
                <br />
           <button onClick={this.increament.bind(this)} >increament</button>
        <button onClick={this.decreament.bind(this)} >decreament</button>


            </div>
        )
    }
}

export default Counter