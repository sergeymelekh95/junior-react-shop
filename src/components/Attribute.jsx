import React, { Component } from 'react';

class Attribute extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { attribute } = this.props;

        return (
            <div>
                <p className='characteristic__attributes'>
                    {attribute.name.toUpperCase()}:
                </p>
                <div className='options-container'>
                    {attribute.items.map((item) =>
                        item.value.split('')[0] === '#' ? (
                            <div
                                key={item.id}
                                className='attribute__value'
                                style={{
                                    backgroundColor: item.value,
                                    border: 'none',
                                    width: '32px',
                                    height: '32px',
                                }}
                            ></div>
                        ) : (
                            <div key={item.id} className='attribute__value'>
                                {item.value}
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    }
}

export { Attribute };
