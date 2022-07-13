import React, { Component } from 'react';
import { Characteristic } from '../components/Characteristic';
import { GalleryImg } from '../components/GalleryImg';

class ItemInfo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { getItem } = this.props;
        getItem(window.location.href.split('/').slice(-1).join());
    }

    componentWillUnmount() {
        const { updateState } = this.props;
        updateState();
    }

    render() {
        const { product, indexMainImg, indexCurrency } = this.props.state;
        const { changeMainImg, addProductInBasket } = this.props;

        return (
            <div>
                {product ? (
                    <div className='product'>
                        <GalleryImg
                            images={product.gallery}
                            name={product.name}
                            indexMainImg={indexMainImg}
                            changeMainImg={changeMainImg}
                        />
                        <Characteristic
                            addProductInBasket={addProductInBasket}
                            product={product}
                            indexCurrency={indexCurrency}
                        />
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}

export { ItemInfo };
