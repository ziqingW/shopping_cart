import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Icon extends React.Component {
    
    render () {
        let ordered = 0;
        this.props.items.forEach( item => {
            ordered += item.number;
        });
        return (
            <div className="icon-panel">
            <p>Redux Shopping Cart</p><span><FontAwesomeIcon icon="shopping-cart" /> {ordered}</span>
            </div>
            );
    }
}

function mapStateToProps (state) {
  return {
    items: state.items
  };
}

Icon = connect(mapStateToProps)(Icon);