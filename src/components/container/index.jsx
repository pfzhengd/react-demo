import React from 'react';
import Button from '../button/index';
import * as Actions from '../../untility/actions';
import CounterStore from '../../untility/counterStore';
import './style.scss';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.hancleDecrement = this.hancleDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
        this.counterCaption = this.props.counterCaption;
        this.state = { count: CounterStore.getCounterValues()[this.counterCaption] };
    }

    handleIncrement() {
        //this.setState({ count: this.state.count + 1 });
        Actions.increment(this.counterCaption);
        //this.props.parentUpdate(1);
    }

    hancleDecrement() {
        // let count = this.state.count;
        // if (count === 0) {
        //     return null;
        // }
        // this.setState({ count: count > 0 ? (count - 1) : (count + 1) });
        Actions.decrement(this.counterCaption);
        //this.props.parentUpdate(-1);
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillMount() {
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.counterCaption];
        this.setState({
            count: newCount
        })
    }

    render() {
        return (
            <div className='container'>
                <Button handleClick={this.handleIncrement} text='+' />
                <Button handleClick={this.hancleDecrement} text='-' />
                <span>{this.state.count}</span>
                <label>{this.props.labelText}</label>
            </div>
        )
    }
}

export default Container;