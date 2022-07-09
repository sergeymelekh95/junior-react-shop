import React, { Component } from 'react';

class Basket extends Component {

    componentDidMount() {
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "17px";
    }

    componentWillUnmount() {
        document.body.style.overflow = "scroll";
        document.body.style.marginRight = "0px";
    }

    render() {
        return (
            <>
                <div className='basket-content'>Nothing there</div>
            </>
        );
    }
}

export { Basket };
