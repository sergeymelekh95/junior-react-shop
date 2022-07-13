import React, { Component } from 'react';
import { Attribute } from './Attribute';

class Characteristic extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.setFirstState = this.setFirstState.bind(this);
        this.setProductAttributes = this.setProductAttributes.bind(this);
    }

    setFirstState() {
        const { id, attributes, name, brand, prices, gallery } = this.props.product;
        const { indexCurrency } = this.props;

        const state = {
            id,
            name,
            brand,
            price: prices[indexCurrency].amount,
            currency: prices[indexCurrency].currency.label,
            symbol: prices[indexCurrency].currency.symbol,
            gallery: gallery[0],
        };

        for (let i = 0; i < attributes.length; ++i) {
            state[attributes[i].id] = attributes[i].items[0].id;
        }

        return state;
    }

    setProductAttributes(key, value) {
        this.setState({
            [key]: value,
        });
    }

    componentDidMount() {
        this.setState({
            ...this.setFirstState(),
        });
    }

    componentDidUpdate(prevState) {
        const { prices } = this.props.product;

        if (prevState.indexCurrency !== this.props.indexCurrency) {
            this.setState({
                price: prices[this.props.indexCurrency].amount,
                currency: prices[this.props.indexCurrency].currency.label,
                symbol: prices[this.props.indexCurrency].currency.symbol,
            });
        }
    }

    render() {
        const { indexCurrency, addProductInBasket } = this.props;
        const { name, description, prices, brand, attributes, inStock, id } =
            this.props.product;

        const regex = /(<([^>]+)>)/gi;
        const formatDescription = description.replace(regex, '');

        return Object.keys(this.state).length ? (
            <div className='characteristics'>
                <h1 className='characteristic__name'>{name}</h1>
                <p className='characteristic__brand'>{brand}</p>
                {attributes.map((attribute) => (
                    <Attribute
                        setProductAttributes={this.setProductAttributes}
                        state={this.state}
                        key={attribute.id}
                        id={id}
                        attribute={attribute}
                    />
                ))}

                <p className='characteristic__attributes characteristic__attributes_price'>
                    PRICE:
                </p>
                <p className='price'>
                    <span>{this.state.symbol}</span>
                    {this.state.price}
                </p>

                <button
                    onClick={() => addProductInBasket(this.state)}
                    disabled={!inStock}
                    className='add-btn'
                >
                    ADD TO CART
                </button>

                <p
                    className='description'
                    dangerouslySetInnerHTML={{
                        __html: formatDescription,
                    }}
                />
            </div>
        ) : (
            <h1>Loading...</h1>
        );
    }
}

export { Characteristic };
