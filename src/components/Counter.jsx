import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        
     };

    render() { 
        return(
        <React.Fragment>
        <span style={{ fontSize: 34 }} className="btn m-2 btn-danger">
            {this.formatNumber()}
        </span>
        <button className="btn m-2 btn-primary"> Increment </button>
        </React.Fragment>
        );
    }
    formatNumber() {
        const { count } =this.state;
        return count === 0 ? "Zero" : count;
    } 
}
 
export default Counter;