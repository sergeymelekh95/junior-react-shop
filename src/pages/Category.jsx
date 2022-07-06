import React, { Component } from 'react';
import { Item } from '../components/Item';
import { NavLink } from 'react-router-dom';

class Category extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevState) {
        const { category } = this.props.state;
        const { getProducts } = this.props;

        if (category !== prevState.state.category) {
            getProducts(category);
        }
    }

    render() {
        const { loading, products, indexCurrency, category } = this.props.state;

        return (
            <>
                <h1 className='title title-category'>
                    {category.toUpperCase()}
                </h1>
                <div className='category-container'>
                    {loading ? (
                        <h2>Loading....</h2>
                    ) : (
                        products.map((product) => (
                            <NavLink
                                className='link'
                                key={product.id}
                                to={`/${category}/` + product.id}
                            >
                                <Item
                                    key={product.id}
                                    product={product}
                                    indexCurrency={indexCurrency}
                                />
                            </NavLink>
                        ))
                    )}
                </div>
            </>
        );
    }
}

export { Category };
