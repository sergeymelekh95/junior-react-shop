import React, { Component } from 'react';
import { AttributeButton } from './AttributeButton';
import { AttributeColorButton } from './AttributeColorButton';

class Attribute extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { attribute, id, setProductAttributes } = this.props;
        console.log(this.props);

        return (
            <div>
                <p className='characteristic__attributes'>
                    {attribute.name.toUpperCase()}:
                </p>
                <div className='options-container'>
                    {attribute.name === 'Color'
                        ? attribute.items.map((item) => (
                              <AttributeColorButton
                                  idProduct={id}
                                  id={item.id}
                                  value={item.value}
                                  key={item.id}
                                  setProductAttributes={setProductAttributes}
                              />
                          ))
                        : attribute.items.map((item) => (
                              <AttributeButton
                                  idProduct={id}
                                  id={item.id}
                                  value={item.value}
                                  key={item.id}
                                  setProductAttributes={setProductAttributes}
                              />
                          ))}
                </div>
            </div>
        );
    }
}

export { Attribute };
