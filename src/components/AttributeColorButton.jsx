import React, { Component } from 'react';

class AttributeColorButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, value, idProduct,setProductAttributes } = this.props;

        return (
            <button
                id={id}
                onClick={setProductAttributes}
                className='attribute__value btn'
                style={{
                    backgroundColor: value,
                    border: 'none',
                    width: '32px',
                    height: '32px',
                }}
            ></button>
        );
    }
}

export { AttributeColorButton };
