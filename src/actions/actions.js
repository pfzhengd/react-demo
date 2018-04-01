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

export const loadingSuccess = (item) => {
    return {
        type: ActionTypes.LOADING_SUCCESS,
        item: item
    }
}

export const loadingBefore = (item) => {
    return {
        type: ActionTypes.LOADING_BEFOER,
        item: item
    }
}

export const loadingError = (item) => {
    return {
        type: ActionTypes.LOADING_ERROR,
        item: item
    }
}

export const loadingAsync = (item) => {
    return (dispatch) => {
        dispatch(loadingBefore(item));
        fetch(`data/cityinfo/${item.code}.html`).then((res) => {
            if (res.status !== 200) {
                throw new Error('Fail to get response with status ' + res.status)
            }
            res.json().then((resJson) => {
                //setTimeout(() => {
                dispatch(loadingSuccess(resJson.weatherinfo))
                //}, 2000);
            }).catch((err) => {
                console.log(err);
                dispatch(loadingError(item));
            });
        }).catch((err) => {
            console.log(err);
            dispatch(loadingError(item));
        })
    }
}