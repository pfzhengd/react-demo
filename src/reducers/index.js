import * as ActionTypes from '../actions/actionTypes';

export default (state, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            {
                state.items.push({
                    id: state.items.length + 1,
                    code: action.item.code,
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
        case ActionTypes.LOADING_SUCCESS:
            {
                return Object.assign({}, state, {
                    showInfo: action.item
                })
            }
        case ActionTypes.LOADING_BEFOER:
            {
                return Object.assign({}, state, {
                    showInfo: {
                        loading: true
                    }
                })
            }
        case ActionTypes.LOADING_ERROR:
            {
                return Object.assign({}, state, {
                    showInfo: {
                        loading: true
                    }
                })
            }
        default:
            {
                console.log(action.type);
                return state;
            }
    }
}