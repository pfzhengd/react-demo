
import {EventEmitter} from 'events';
import Dispatcher from '../untility/dispatcher';
import * as ActionType from '../untility/actionType';
import CounterStore from '../untility/counterStore';

const EVENT_CHANGE='changed';

let computeSummary = function(counterValues){
    let summary = 0;
    for(var key in counterValues){
        summary += counterValues[key];
    }
    return summary;
}

let SummaryStore = Object.assign({},EventEmitter.prototype,{
    getSummary:function(){
        return computeSummary(CounterStore.getCounterValues());
    },
    addChangeListener:function(callback){
        this.on(EVENT_CHANGE,callback);
    },
    removeChangeListener:function(callback){
        this.removeListener(EVENT_CHANGE,callback);
    },
    emitChange:function(){
        this.emit(EVENT_CHANGE);
    }
});

SummaryStore.dispatcherToKen = Dispatcher.register((action)=>{
    if(action.type === ActionType.INCREMENT || action.type === ActionType.DECREMENT){
        Dispatcher.waitFor([CounterStore.dispatcherToKen]);
        SummaryStore.emitChange();
    }
});

export default SummaryStore;