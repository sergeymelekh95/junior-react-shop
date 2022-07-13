import React, { Component } from 'react';
import { Menu } from './Menu';
import logo_1 from '../img/logo/logo_1.svg';
import logo_2 from '../img/logo/logo_2.svg';
import logo_3 from '../img/logo/logo_3.svg';
import logo_4 from '../img/logo/logo_4.svg';
import dropdownOpen from '../img/dropdownOpen.svg';
import dropdownClose from '../img/dropdownClose.svg';
import basket from '../img/basket/basket.svg';
import wheel from '../img/basket/wheel.svg';
import { NavLink } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import { Basket } from './Basket';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isDropdown, currencies, currency, isBasket, basketContent } =
            this.props.state;
        const { handleCurrency, handleDropdown, handleCategory, handleBasket } =
            this.props;

        return (
            <div className='headerRow'>
                <Menu
                    state={this.props.state}
                    handleCategory={handleCategory}
                />
                <NavLink className='nav-logo' to='/'>
                    <div className='logo-img'>
                        <img className='logo_1' src={logo_1} alt='logo' />
                        <img className='logo_2' src={logo_2} alt='logo' />
                        <img className='logo_3' src={logo_3} alt='logo' />
                        <img className='logo_4' src={logo_4} alt='logo' />
                    </div>
                </NavLink>
                <div className='basket-block'>
                    <div>{!currency ? null : currency}</div>
                    {isBasket ? <Basket basketContent={basketContent} /> : null}
                    <button
                        className='btn dropdown-btn'
                        onClick={handleDropdown}
                    >
                        <img
                            className='dropdown-btn__icon'
                            src={isDropdown ? dropdownClose : dropdownOpen}
                            alt='currency'
                        />
                    </button>
                    <button className='btn basket-btn' onClick={handleBasket}>
                        {basketContent.length ? (
                            <div className='countProduct'>
                                {basketContent.length}
                            </div>
                        ) : null}
                        <img className='basket-img' src={basket} alt='basket' />
                        <img className='wheel_1' src={wheel} alt='wheel' />
                        <img className='wheel_2' src={wheel} alt='wheel' />
                    </button>

                    {isDropdown ? (
                        <Dropdown
                            currencies={currencies}
                            handleCurrency={handleCurrency}
                        />
                    ) : null}
                </div>
            </div>
        );
    }
}

export { Header };
