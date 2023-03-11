import React, { Component } from "react";
class Classbasedex extends Component {
    constructor(props) {
        super(props);
        this.state={
            count: 0
        };
        setInterval(() => { this.setState({ Count: this.state.count + 1 }, 1000) });
    };


    render() {
        return (
            <>
                <h2>Count:{this.state.count}</h2>
            
            </>

        )
    }
}
export default Classbasedex;