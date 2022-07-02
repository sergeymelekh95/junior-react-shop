import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gql } from '@apollo/client';
import { Header } from './components/Header';
import { All } from './pages/All';
import { Clothes } from './pages/Clothes';
import { Tech } from './pages/Tech';
import { NotFound } from './pages/NotFound';
import { client } from '.';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currency: '',
            isDropdown: false,
            currencies: [],
            loading: true,
            products: [],
            indexCurrency: null,
        };

        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleCurrency = this.handleCurrency.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.getCurrencies = this.getCurrencies.bind(this);
    }

    getProducts(category = 'all') {
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

    componentDidMount() {
        this.getCurrencies();
    }

    componentDidUpdate() {}

    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <header className='header'>
                        <div className='content'>
                            <Header
                                handleCurrency={this.handleCurrency}
                                handleDropdown={this.handleDropdown}
                                state={this.state}
                            />
                        </div>
                    </header>
                    <main className='main'>
                        <div className='content'>
                            <Routes>
                                <Route
                                    path='/'
                                    element={
                                        <All
                                            getProducts={this.getProducts}
                                            state={this.state}
                                        />
                                    }
                                ></Route>
                                <Route
                                    path='/clothes'
                                    element={
                                        <Clothes
                                            getProducts={this.getProducts}
                                            state={this.state}
                                        />
                                    }
                                ></Route>
                                <Route
                                    path='/tech'
                                    element={
                                        <Tech
                                            getProducts={this.getProducts}
                                            state={this.state}
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
