import React from 'react';
import {Itemlist} from './Itemlist';
import {Icon} from './Icon';
import {Orderlist} from './Orderlist';
import { Provider } from 'react-redux';
import store from './store.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal } from './Modal.jsx';

library.add(faShoppingCart, faQuestionCircle);

class App extends React.Component {
    constructor (props) {
        super (props);
    }
    
    render () {
        return (
            <Provider store={store}>
            <div className="app-wrapper">
            <Icon />
            <div className="info-panel">
            <Itemlist />
            <Orderlist />
            </div>
            <div className="footer" />
            <Modal />
            </div>
            </Provider>
            );
    }
}

export default App;

            
            
