import React from 'react';
import { connect } from 'react-redux';
import { cancelModal, addItem } from './actions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Modal extends React.Component {
    
    addItem = e => {
        let numbers = this.refs.numbers.value;
        this.props.addItem(numbers);
    }
    
    render() {
        let total_number = 0;
        this.props.items.forEach(item => {
            total_number += item.number;
        });
        return (
             this.props.modal ? 
            (<div className="modal-back">
                <div className="modal-form">
                <p>Add to Cart</p>
                <div className="modal-content">    
                    <FontAwesomeIcon icon="question-circle" className="question"/>
                
                <form className="additem-form" onSubmit={ e => {e.preventDefault(); this.addItem();}}>
                    <div>
                    <h6>Would you like to add to cart?</h6>
                    <p>How many? Currently {total_number} items in your cart.</p>
                    <select ref="numbers">
                        <option value={1} selected>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                    </select>
                    </div>
                    <div className="modal-buttons">
                        <button onClick={this.props.cancelModal}>Cancel</button>
                        <button className="ok-button" type="submit">OK</button>
                    </div>
                </form>
                </div>
            </div>
            </div>)
            : null 
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.items,
        modal: state.modal
    };
}

function mapDispatchToProps(dispatch) {
    return {
        cancelModal: function() {
            dispatch(cancelModal());
        },
        addItem: function(data) {
            dispatch(addItem(data));
        }
    };
}

Modal = connect(mapStateToProps, mapDispatchToProps)(Modal);
