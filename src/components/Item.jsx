import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.disabledColor = '#8D8F9A';
        this.state = {};
    }

    render() {
        const { name, inStock, gallery, prices } = this.props.product;
        const { indexCurrency } = this.props;

        return (
            <div
                className='item'
                style={{ color: `${inStock ? null : this.disabledColor}` }}
            >
                <div
                    className='img-container'
                    style={{
                        backgroundImage: `url(${gallery[0]})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        opacity: `${inStock ? null : '0.5'}`,
                    }}
                >
                    {inStock ? null : (
                        <p className='item__stock'>OUT OF STOCK</p>
                    )}
                </div>
                <p className='item__name'>{name}</p>
                <p className='item__price'>
                    <span className='item__price'>
                        {prices[indexCurrency || 0].currency.symbol}
                    </span>
                    {prices[indexCurrency || 0].amount}
                </p>
            </div>
        );
    }
}

export { Item };
