import React from 'react';
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            clickCount: 0
        }
    }
    plus = () => {
        this.setState({ clickCount: this.state.clickCount+1 })
    }
    minus = () => {
        if(this.state.clickCount>0)
        this.setState({ clickCount: this.state.clickCount-1 })
    }
    render() {
        const { clickCount,name,age } = this.state;
        return (
            <div>
                <button onClick={this.plus}>+</button>
                <h3>{this.state.clickCount}</h3>
                <button onClick={this.minus}>-</button>
            </div>
        )
    }
}
export default Counter