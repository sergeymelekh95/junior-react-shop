import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <nav>
                <ul className='menu'>
                    <li>
                        <NavLink className='menu__link' to='/'>ALL</NavLink>
                    </li>
                    <li>
                        <NavLink className='menu__link' to='/clothes'>CLOTHES</NavLink>
                    </li>
                    <li>
                        <NavLink className='menu__link' to='/tech'>TECH</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export { Menu };
