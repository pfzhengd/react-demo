import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
//import {Perf} from 'react-addons-perf';

import reducer from '../reducers/index';
let thunkMiddlewares = require('redux-thunk');
let risi = require('redux-immutable-state-invariant');
let datas = {
    items: [{
        id: 0,
        code: '101280601',
        text: '深圳市'
    }, {
        id: 1,
        code: '101280101',
        text: '广州市'
    }, {
        id: 2,
        code: '101281601',
        text: '东莞市'
    }],
    showInfo: {
        city: '#',
        temp1: '#',
        temp2: '#',
        weather: '#',
        loading: false
    }
};

// const win = window;
// win.Perf = Perf;

const middlewares = [];
//middlewares.push(thunkMiddlewares.default());

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(risi.default());
}

middlewares.push(thunkMiddlewares.default.bind(this));
const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f,
);

export default createStore(reducer, datas, storeEnhancers);