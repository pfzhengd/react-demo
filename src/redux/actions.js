import * as ActionType from '../redux/actionType';

export const increment = (counterCaption) => {
    return {
        type: ActionType.INCREMENT,
        counterCaption: counterCaption
    }
}

export const decrement = (counterCaption) => {
    return {
        type: ActionType.DECREMENT,
        counterCaption: counterCaption
    }
}