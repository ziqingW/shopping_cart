import { createStore } from 'redux';
import items from './reducers';

var store = createStore(items);
export default store;