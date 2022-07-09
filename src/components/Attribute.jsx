import React, { Component } from 'react';
import { AttributeButton } from './AttributeButton';
import { AttributeColorButton } from './AttributeColorButton';

class Attribute extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { attribute, id, state, setProductAttributes } = this.props;

        return (
            <div>
                <p className='characteristic__attributes'>
                    {attribute.name.toUpperCase()}:
                </p>
                <div className='options-container'>
                    {attribute.name === 'Color'
                        ? attribute.items.map((item) => (
                              <AttributeColorButton
                              setProductAttributes={setProductAttributes}
                                  attributeName={attribute.name}
                                  state={state}
                                  value={item.value}
                                  displayValue={item.displayValue}
                                  key={item.id}
                              />
                          ))
                        : attribute.items.map((item) => (
                              <AttributeButton
                              setProductAttributes={setProductAttributes}
                                  attributeName={attribute.name}
                                  state={state}
                                  value={item.value}
                                  displayValue={item.displayValue}
                                  key={item.id}
                              />
                          ))}
                </div>
            </div>
        );
    }
}

export { Attribute };
