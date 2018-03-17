import React from 'react';
import ReactDOM from 'react-dom';
import Panle from './components/panle'
import { Provider } from 'react-redux';

let div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<Panle/>, div);