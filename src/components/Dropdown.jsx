import React, { Component } from 'react';
import { DropdownItem } from './DropdownItem';

class Dropdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currencies, handleCurrency } = this.props;

        return (
            <ul className='dropdown'>
                {currencies.map((currency) => (
                    <DropdownItem
                        key={currency.label}
                        currency={currency}
                        handleCurrency={handleCurrency}
                    />
                ))}
            </ul>
        );
    }
}

export { Dropdown };
