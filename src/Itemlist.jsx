import React from 'react';
import {callModal} from './actions.js';
import { connect } from 'react-redux';


export class Itemlist extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className="items">
            {this.props.items.map( (item, i) => {
                return (
                <div className="item" key={item.id}><p>{item.name}</p><button className="addItem-button" onClick={ () => this.props.callModal(i)}>Add to Cart</button></div>
                );
            })}
            </div>
            );
    }
}

function mapStateToProps (state) {
  return {
    items: state.items,
    modal: state.modal
  };
}
function mapDispatchToProps (dispatch) {
  return {
    callModal: function (data) {
      dispatch(callModal(data));
    }
  };
}

// after MyForm class
Itemlist = connect(
  mapStateToProps, mapDispatchToProps
)(Itemlist);