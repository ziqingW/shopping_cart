import React from 'react';
import { connect } from 'react-redux';

export class Orderlist extends React.Component {
    
    render () {
        let total = 0;
        this.props.items.forEach( item => {
            total += item.number * item.price;
        });
        total = total.toFixed(2);
        return (
            <div className="ordered">
            {this.props.items.map( item => {
                if (item.number > 0) {
                    return (
                    <p>
                    <span>{item.name} - {item.number}</span> - <span>${(item.price * item.number).toFixed(2)}</span>
                    </p>
                    );
                }
            })}
            <p>Total: ${total}</p>
            </div>);
    }
}

function mapStateToProps (state) {
  return {
    items: state.items
  };
}

Orderlist = connect(mapStateToProps)(Orderlist);