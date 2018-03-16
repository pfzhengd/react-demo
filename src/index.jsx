import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/panel/index';
import Store from './redux/store';
import {Provider} from 'react-redux';

let div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<Provider store={Store}><Container/></Provider>,div);