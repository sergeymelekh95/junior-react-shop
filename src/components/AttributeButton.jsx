import React, { Component } from 'react';

class AttributeButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, value, idProduct, setProductAttributes } = this.props;

        return (
            <button
                id={id}
                onClick={setProductAttributes}
                className='attribute__value btn'
            >
                {value}
            </button>
        );
    }
}

export { AttributeButton };
