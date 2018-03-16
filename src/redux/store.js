import {createStore} from 'redux';
import reducer from './reducer';

let initValues = {
    First: 2,
    Second: 3,
    Tried: 4
}

let store = createStore(reducer,initValues);

export default store;