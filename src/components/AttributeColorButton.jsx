import React, { Component } from 'react';

class AttributeColorButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            value,
            attributeName,
            state,
            displayValue,
            setProductAttributes,
        } = this.props;

        return (
            <button
                value={displayValue}
                data-name={attributeName}
                onClick={(e) => {
                    setProductAttributes(e.currentTarget.dataset.name, e.currentTarget.value);
                }}
                className={
                    state[attributeName] === displayValue
                        ? ' btn colorAttribute colorAttribute_selected'
                        : ' btn colorAttribute'
                }
                style={{
                    width: '32px',
                    height: '32px',
                }}
            >
                <div
                    style={{
                        backgroundColor: value,
                        width: '100%',
                        height: '100%',
                    }}
                ></div>
            </button>
        );
    }
}

export { AttributeColorButton };
