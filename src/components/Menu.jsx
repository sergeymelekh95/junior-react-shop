import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories } = this.props.state;
        const { handleCategory } = this.props;

        return (
            <nav>
                <ul className='menu'>
                    {categories.length ? (
                        categories.map((category) => (
                            <li key={category.name}>
                                <NavLink
                                    onClick={() => handleCategory(category.name)}
                                    className='link menu__link'
                                    to={'/' + category.name}
                                >
                                    {category.name.toUpperCase()}
                                </NavLink>
                            </li>
                        ))
                    ) : (
                        <h1>LOADING...</h1>
                    )}
                </ul>
            </nav>
        );
    }
}

export { Menu };
