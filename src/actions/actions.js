import * as ActionTypes from '../actions/actionTypes';

//声明一个添加方法
export const increment = (item) => {
    return {
        type: ActionTypes.INCREMENT,
        item: item
    }
}

//声明一个删除方法
export const decrement = (item) => {
    return {
        type: ActionTypes.DECREMENT,
        item: item
    }
}