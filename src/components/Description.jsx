import React, { Component } from 'react';

class Description extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { indexCurrency } = this.props;
        const { name, description, prices, brand, attributes } =
            this.props.product;
        // console.log(this.props);
        // console.log(name);

        const regex = /(<([^>]+)>)/gi;
        const formatDescription = description.replace(regex, '');

        return (
            <div className='characteristics'>
                <h1 className='characteristic__name'>{name}</h1>
                <p className='characteristic__brand'>{brand}</p>
                {/* <p className='characteristic__attribute_title'>{attributes[0].name.toUpperCase()}:</p>
                <div className='size-container'>
                    {attributes[0].items.map((size) => <div className='size'>{size.value}</div>)}
                </div> */}
                <p
                    dangerouslySetInnerHTML={{
                        __html: formatDescription,
                    }}
                />
                <p>
                    <span>{prices[indexCurrency].currency.symbol}</span>
                    {prices[indexCurrency].amount}
                </p>
            </div>
        );
    }
}

export { Description };
