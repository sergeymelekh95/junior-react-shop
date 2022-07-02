import React, { Component } from 'react';

class DropdownItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { label, symbol } = this.props.currency;
        const {handleCurrency} = this.props;

        return (
            <li
                onClick={(e) => {
                    handleCurrency(symbol);
                }}
            >
                {symbol} {label}
            </li>
        );
    }
}

export { DropdownItem };
