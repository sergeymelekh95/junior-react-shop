import React, { Component } from 'react';
import { Attribute } from './Attribute';

class Characteristic extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { indexCurrency, setProductAttributes } = this.props;
        const { name, description, prices, brand, attributes, inStock, id } =
            this.props.product;

        const regex = /(<([^>]+)>)/gi;
        const formatDescription = description.replace(regex, '');

        return (
            <div className='characteristics'>
                <h1 className='characteristic__name'>{name}</h1>
                <p className='characteristic__brand'>{brand}</p>
                {attributes.map((attribute) => (
                    <Attribute
                        key={attribute.id}
                        id={id}
                        attribute={attribute}
                        setProductAttributes={setProductAttributes}
                    />
                ))}

                <p className='characteristic__attributes characteristic__attributes_price'>
                    PRICE:
                </p>
                <p className='price'>
                    <span>{prices[indexCurrency].currency.symbol}</span>
                    {prices[indexCurrency].amount}
                </p>

                <button disabled={!inStock} className='add-btn'>
                    ADD TO CART
                </button>

                <p
                    className='description'
                    dangerouslySetInnerHTML={{
                        __html: formatDescription,
                    }}
                />
            </div>
        );
    }
}

export { Characteristic };
