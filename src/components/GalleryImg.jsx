import React, { Component } from 'react';

class GalleryImg extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { images, name, indexMainImg, changeMainImg } = this.props;

        return (
            <div className='product-img'>
                <div className='img-item-container'>
                    {images.map((img, index) => (
                        <img
                            className='img__item'
                            key={index}
                            src={img}
                            alt={name}
                            onClick={(e) => changeMainImg(e.target.src)}
                        />
                    ))}
                </div>
                <img
                    className='img__main'
                    src={images[indexMainImg]}
                    alt={name}
                />
            </div>
        );
    }
}

export { GalleryImg };
