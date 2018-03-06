import React from 'react';
import Button from '../button/index';
import './style.scss';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleDecreaseClick = this.handleDecreaseClick.bind(this);
    }

    handleAddClick() {
        this.setState({ count: this.state.count + 1 });
    }

    handleDecreaseClick() {
        let count = this.state.count;
        this.setState({ count: count > 0 ? (count - 1) : (count + 1) });
    }

    render() {
        return (
            <div className='container'>
                <Button parentMethod={this.handleAddClick} text='+' />
                {this.state.count>0?<Button parentMethod={this.handleDecreaseClick} text='-' />:''}
                <span>{this.state.count}</span>
            </div>
        )
    }
}

export default Container;