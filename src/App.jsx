import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { gql } from '@apollo/client';
import { Header } from './components/Header';
import { Category } from './pages/Category';
import { NotFound } from './pages/NotFound';
import { client } from '.';
import { ItemInfo } from './pages/ItemInfo';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currency: '',
            isDropdown: false,
            currencies: [],
            loading: true,
            products: [],
            indexCurrency: 0,
            categories: [],
            category: window.location.href.split('/').slice(-1).join() || 'all',
            id: window.location.href.split('/').slice(-1).join(),
            product: null,
            indexMainImg: 0,
            isBasket: false,
            basketContent: [],
            productAttributes: null,
        };

        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleBasket = this.handleBasket.bind(this);
        this.handleCurrency = this.handleCurrency.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.getCurrencies = this.getCurrencies.bind(this);
        this.getCategories = this.getCategories.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.getItem = this.getItem.bind(this);
        this.updateState = this.updateState.bind(this);
        this.changeMainImg = this.changeMainImg.bind(this);
        this.closePopap = this.closePopap.bind(this);
        this.setProductAttributes = this.setProductAttributes.bind(this);
    }

    setProductAttributes() {
        console.log('setProductAttributes');
    }

    changeMainImg(src) {
        this.setState({
            indexMainImg: this.state.product.gallery.indexOf(src),
        });
    }

    getProducts(category) {
        client
            .query({
                query: gql`
                {
                    category(input: { title: "${category}" }) {
                      name,
                      products {
                        id,
                        name,
                        inStock,
                        gallery,
                        prices{
                          amount,
                          currency {
                            label,
                            symbol
                          }
                        }
                      }
                    }
                  }
                `,
            })
            .then((result) =>
                this.setState({
                    products: result.data.category.products,
                })
            );
    }

    handleCategory(name) {
        this.setState({
            category: name,
        });
    }

    getCurrencies() {
        client
            .query({
                query: gql`
                    {
                        currencies {
                            label
                            symbol
                        }
                    }
                `,
            })
            .then((result) =>
                this.setState({
                    currencies: result.data.currencies,
                    loading: false,
                    currency: result.data.currencies[0].symbol,
                })
            );
    }

    handleCurrency(currency) {
        this.setState({
            currency: currency,
            isDropdown: false,
            indexCurrency: this.state.currencies.findIndex(
                (el) => el.symbol === currency
            ),
        });
    }

    handleDropdown() {
        this.setState({ isDropdown: !this.state.isDropdown });
    }

    handleBasket() {
        this.setState({ isBasket: !this.state.isBasket });
    }

    getItem(id) {
        this.setState({
            loading: true,
            id: !id ? this.state.id : id,
        });

        client
            .query({
                query: gql`
                    {
                        product(id: "${id}") {
                            id
                            name
                            inStock
                            gallery
                            description
                            category
                            attributes {
                                id
                                name
                                type
                                items {
                                    displayValue
                                    value
                                    id
                                }
                            }
                            prices {
                                amount
                                currency {
                                    label
                                    symbol
                                }
                            }
                            brand
                        }
                    }
                `,
            })
            .then((result) =>
                this.setState({
                    loading: false,
                    product: result.data.product,
                })
            );
    }

    getCategories() {
        this.setState({
            loading: true,
        });

        client
            .query({
                query: gql`
                    {
                        categories {
                            name
                        }
                    }
                `,
            })
            .then((result) =>
                this.setState({
                    loading: false,
                    categories: result.data.categories,
                })
            );
    }

    updateState() {
        this.setState({
            product: null,
            indexMainImg: 0,
        });
    }

    closePopap() {
        if (this.state.isDropdown) {
            this.handleDropdown();
        }

        if (this.state.isBasket) {
            this.handleBasket();
        }
    }

    componentDidMount() {
        this.getCategories();
        this.getCurrencies();
    }

    render() {
        return (
            <BrowserRouter>
                <div
                    className='container'
                    onClick={this.closePopap}
                >
                    <header className='header'>
                        <div className='content'>
                            <Header
                                handleCategory={this.handleCategory}
                                handleCurrency={this.handleCurrency}
                                handleDropdown={this.handleDropdown}
                                handleBasket={this.handleBasket}
                                state={this.state}
                            />
                        </div>
                    </header>
                    <main className='main'>
                        {this.state.isBasket ? <div className='overlay'></div> : null}
                        <div className='content'>
                            <Routes>
                                <Route
                                    path='/'
                                    element={<Navigate to='/all' />}
                                ></Route>
                                <Route
                                    path='/:name'
                                    element={
                                        <Category
                                            getProducts={this.getProducts}
                                            handleItem={this.handleItem}
                                            state={this.state}
                                        />
                                    }
                                ></Route>
                                <Route
                                    path='/:name/:id'
                                    element={
                                        <ItemInfo
                                            state={this.state}
                                            updateState={this.updateState}
                                            getItem={this.getItem}
                                            changeMainImg={this.changeMainImg}
                                            setProductAttributes={this.setProductAttributes}
                                        />
                                    }
                                ></Route>
                                <Route path='*' element={<NotFound />}></Route>
                            </Routes>
                        </div>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
