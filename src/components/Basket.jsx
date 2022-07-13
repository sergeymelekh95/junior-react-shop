import React, { Component } from 'react';
import { BaksetItem } from './BaksetItem';

class Basket extends Component {
    componentDidMount() {
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = '17px';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'scroll';
        document.body.style.marginRight = '0px';
    }

    render() {
        const { basketContent } = this.props;
        console.log(basketContent);

        return (
            <>
                {basketContent.length ? (
                    <div className='basket-content'>
                        <h1 className='basket__title'>
                            My Bag, <span>{basketContent.length} items</span>
                            {basketContent.map((basketItem) => (
                                <BaksetItem
                                    key={basketItem.id}
                                    state={basketItem}
                                />
                            ))}
                        </h1>
                    </div>
                ) : (
                    <div className='basket-content'>Your basket is empty</div>
                )}
            </>
        );
    }
}

export { Basket };
