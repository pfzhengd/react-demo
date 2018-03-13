import {
    EventEmitter
} from "events";
import Dispatcher from '../untility/dispatcher';
import * as ActionType from '../untility/actionType';

const EVENT_CHANGE = 'changed';

let counterValues = {
    First: 1,
    Second: 11,
    Tried: 111
}

let counterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues: function () {
        return counterValues;
    },
    emitChange: function () {
        this.emit(EVENT_CHANGE);
    },
    addChangeListener: function (callback) {
        this.on(EVENT_CHANGE, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(EVENT_CHANGE, callback);
    }
});

counterStore.dispatcherToKen = Dispatcher.register((action) => {
    if (action.type === ActionType.INCREMENT) {
        counterValues[action.counterCaption]++;
        counterStore.emitChange();
    } else if (action.type === ActionType.DECREMENT) {
        if (counterValues[action.counterCaption] === 0) {
            return null;
        }
        counterValues[action.counterCaption]--;
        counterStore.emitChange();
    }
});

export default counterStore;