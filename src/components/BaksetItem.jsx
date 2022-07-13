import React, { Component } from 'react';

class BaksetItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        // console.log(this.props);
        const {name, brand} = this.props.state;
        console.log(name);

        return <li>
            <h2></h2>
        </li>;
    }
}

export { BaksetItem };
