import React, { Component } from 'react';

class AttributeButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            value,
            state,
            attributeName,
            setProductAttributes,
            displayValue,
        } = this.props;

        return (
            <button
                value={displayValue}
                data-name={attributeName}
                onClick={(e) => setProductAttributes(e.target.dataset.name, e.target.value)}
                className={
                    state[attributeName] === displayValue
                        ? 'attribute__value btn attribute_selected'
                        : 'attribute__value btn'
                }
            >
                {value}
            </button>
        );
    }
}

export { AttributeButton };
