import React from 'react';
import Container from '../container/index';
//import SummaryStore from '../../untility/summaryStore';
import Store from '../../redux/store';
import './style.scss';

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.getStatesCount()
        }
        //this.handleUpdateCount = this.handleUpdateCount.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getStatesCount = this.getStatesCount.bind(this);
    }

    componentDidMount(){
        //SummaryStore.addChangeListener(this.onChange);
        Store.subscribe(this.onChange);
    }

    componentWillUnmount(){
        //SummaryStore.removeChangeListener(this.onChange);
    }

    getStatesCount(){
        let states = Store.getState(),
            count = 0;
        for(var state in states){
            count += states[state];
        }

        return count;
    }

    onChange(){
        this.setState({
            count:this.getStatesCount()
        });
    }

    render() {
        return (
            <div>
                <Container labelText='First ' counterCaption='First' />
                <Container labelText='Second ' counterCaption='Second' />
                <Container labelText='Tried ' counterCaption='Tried' />
                <div className='count'>
                    <label>当前总量：{this.state.count}</label>
                </div>
            </div>
        )
    }
}
export default Panel;