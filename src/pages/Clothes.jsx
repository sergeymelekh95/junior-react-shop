import React, { Component } from 'react';
import { Item } from '../components/Item';

class Clothes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {getProducts} = this.props;
        getProducts("clothes");
    }

    render() {
        const { loading, products, indexCurrency } = this.props.state;

        return (
            <>
                <h1 className="title title-category">CLOTHES</h1>
                <div className='category-container'>
                    {loading ? (
                        <h2>Loading....</h2>
                    ) : (
                        products.map((product) => (
                            <Item key={product.id} product={product} indexCurrency={indexCurrency} />
                        ))
                    )}
                </div>
            </>
        );
    }
}

export {Clothes}