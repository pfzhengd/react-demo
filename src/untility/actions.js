import Dispatcher from '../untility/dispatcher';
import * as ActionType from '../untility/actionType';

export const increment = (counterCaption) => {
    Dispatcher.dispatch({
        type: ActionType.INCREMENT,
        counterCaption: counterCaption
    })
}

export const decrement = (counterCaption) => {
    Dispatcher.dispatch({
        type: ActionType.DECREMENT,
        counterCaption: counterCaption
    })
}