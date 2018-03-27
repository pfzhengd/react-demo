import * as ActionTypes from '../actions/actionTypes';

export default (state, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            {
                debugger;
                state.items.push({
                    id: state.items.length + 1,
                    code:action.item.code,
                    text: action.item.text
                })

                return state;
            }
        case ActionTypes.DECREMENT:
            {
                //console.log(action.item);
                let index = state.items.findIndex((item) => {
                    return item.id === action.item.id;
                });
                state.items.splice(index, 1);
                return state;
            }
        default:
            {
                console.log(action.type);
                return state;
            }
    }
}