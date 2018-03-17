import * as ActionTypes from '../actions/actionTypes';

export default (state, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            {
                state.push({
                    id: state.length + 1,
                    text: action.item.text
                })

                return state;
            }
        case ActionTypes.DECREMENT:
            {
                //console.log(action.item);
                let index = state.findIndex((item) => {
                    return item.id === action.item.id;
                });
                state.splice(index, 1);
                return state;
            }
        default:
            {
                console.log(action.type);
                return state;
            }
    }
}