import * as ActionTypes from '../redux/actionType';

export default (state, action) => {
    let counterCaption = action.counterCaption;
    switch (action.type) {
        case ActionTypes.INCREMENT:
            {
                return Object.assign({}, state, {
                    [counterCaption]: state[counterCaption] + 1
                });
            }
        case ActionTypes.DECREMENT:
            {
                return Object.assign({}, state, {
                    [counterCaption]: state[counterCaption] - 1
                });
            }
        default:
            {
                return state;
            }
    }
}