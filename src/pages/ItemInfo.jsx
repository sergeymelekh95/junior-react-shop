import React, { Component } from 'react';
import { Description } from '../components/Description';
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
        const { changeMainImg } = this.props;

        console.log(this.props.state);

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
                        <Description
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
