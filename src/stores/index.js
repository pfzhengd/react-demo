import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import {Perf} from 'react-addons-perf';

import reducer from '../reducers/index';

let risi = require('redux-immutable-state-invariant');
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

const win = window;
win.Perf = Perf;

// const reducer = combineReducers({
//     todos:todoR
// })

// const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//     middlewares.push(require('redux-immutable-state-invariant')());
// }
// const storeEnhancers = compose(applyMiddleware(...middlewares),
//     (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f)

//let store = createStore(reducer, datas);

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(risi.default());
}

const storeEnhancers = compose(
    applyMiddleware(middlewares[0]),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, datas, storeEnhancers);