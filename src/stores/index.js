import {
    createStore
} from 'redux';
import reducer from '../reducers/index';
let datas = [{
    id: 1,
    text: 'Hello world - 1'
}, {
    id: 2,
    text: 'Hello world - 2'
}, {
    id: 3,
    text: 'Hello world - 3'
}];

let store = createStore(reducer, datas);

export default store;