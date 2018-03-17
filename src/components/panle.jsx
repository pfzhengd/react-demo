import React, { Component } from 'react';
import Input from '../components/input';
import Button from '../components/button';
import ShowItem from '../components/showItem';
import * as Actions from '../actions/actions';
import Store from '../stores/index';
import '../scss/panle.scss';

class Panle extends Component {
    constructor(props) {
        super(props);
        this.state = { datas: Store.getState() };
        this.onChange = this.onChange.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleChanged = this.hendleChanged.bind(this);
    }

    handleDecrement(item) {
        Store.dispatch(Actions.decrement(item));
    }

    handleIncrement() {
        let item = {
            text: this.enter.value
        }
        Store.dispatch(Actions.increment(item));
        this.enter.value = '';
    }

    componentDidMount() {
        Store.subscribe(this.onChange);
    }

    onChange() {
        this.setState({
            datas: Store.getState()
        })
    }

    hendleChanged(e) {
        //this.value = e.target.value;
        this.enter = e.target;
    }

    render() {
        return (
            <div className='panle-box'>
                <div className='header'>
                    <Input placeholder='Enter...' style='cnInput' handleChanged={this.handleChanged} />
                    <Button text='+' style='btn btnAdd' handleClick={this.handleIncrement} />
                </div>
                <div className='body'>
                    <ul>
                        {this.state.datas.map((item) => {
                            return <li key={item.id}>
                                <ShowItem id={item.id} text={item.text} numStyle='span' />
                                <Button style='btn btnDel' text='x' handleClick={this.handleDecrement.bind(this, item)} />
                            </li>;
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Panle;