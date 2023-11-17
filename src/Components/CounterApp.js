import React, { Component } from 'react'

class CounterApp extends Component {
    constructor(){
        super()

        // this.state = {
        //     counter: 0,
        // }
    }

    state = {
        counter:0,
        colorchange:'true',
        firstName: ''
    }

    handleIncrement = () => {
        this.setState({counter: this.state.counter + 1})
        console.log(this.state.counter)
    }

    handleDecrement = () => {
        this.setState({counter:this.state.counter - 1})
    }

    // never touch the dom directly
  render() {

    return (
      <center>
        <h4>CounterApp</h4>
        <h2 style= {{}}>Counter: {this.state.counter}</h2>
        <button className='btn btn-primary me-2' onClick={this.handleIncrement}>Increment</button>
        <button className='btn btn-danger me-2' onClick={this.handleDecrement}>Increment</button>

        <input type="text" />
      </center>
    )
  }
}

export default CounterApp