import React from 'react';
import Button from '../button/index';
//import * as Actions from '../../untility/actions';
//import CounterStore from '../../untility/counterStore';
import * as Actions from '../../redux/actions';
//import Store from '../../redux/store';
import { connect } from 'react-redux';
import './style.scss';

// class Container extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.handleIncrement = this.handleIncrement.bind(this);
//         // this.hancleDecrement = this.hancleDecrement.bind(this);
//         // this.onChange = this.onChange.bind(this);
//         // this.counterCaption = this.props.counterCaption;
//         // this.getOwnState = this.getOwnState.bind(this);
//         // this.state ={count: this.getOwnState()};
//     }

//     // getOwnState(){
//     //     return Store.getState()[this.counterCaption];
//     // }

//     // handleIncrement() {
//     //     //this.setState({ count: this.state.count + 1 });
//     //     //Actions.increment(this.counterCaption);
//     //     //this.props.parentUpdate(1);
//     //     Store.dispatch(Actions.increment(this.counterCaption));
//     // }

//     // hancleDecrement() {
//     //     // let count = this.state.count;
//     //     // if (count === 0) {
//     //     //     return null;
//     //     // }
//     //     // this.setState({ count: count > 0 ? (count - 1) : (count + 1) });
//     //     //Actions.decrement(this.counterCaption);
//     //     //this.props.parentUpdate(-1);
//     //     Store.dispatch(Actions.decrement(this.counterCaption));
//     // }

//     // componentDidMount() {
//     //     //CounterStore.addChangeListener(this.onChange);
//     //     Store.subscribe(this.onChange);
//     // }

//     // componentWillMount() {
//     //     //CounterStore.removeChangeListener(this.onChange);
//     //     //Store.unsubscribe(this.onChange);
//     // }

//     // onChange() {
//     //     const newCount = this.getOwnState();
//     //     this.setState({
//     //         count: newCount
//     //     })
//     // }

//     render() {
//         let {counterCaption} = this.props;
//         return (
//             <div className='container'>
//                 <Button handleClick={this.handleIncrement} text='+' />
//                 <Button handleClick={this.hancleDecrement} text='-' />
//                 <span>{this.state.count}</span>
//                 <label>{this.props.labelText}</label>
//             </div>
//         )
//     }
// }

function Container(props) {
    return (
        <div className='container'>
            <Button handleClick={props.handleIncrement} text='+' />
            <Button handleClick={props.handleDecrement} text='-' />
            <span>{props.count}</span>
            <label>{props.labelText}</label>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    return { count: state[ownProps.counterCaption] };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleIncrement: () => {
            dispatch(Actions.increment(ownProps.counterCaption));
        },
        handleDecrement: () => {
            dispatch(Actions.decrement(ownProps.counterCaption));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);