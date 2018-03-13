import React from 'react';
import './style.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick();
    }

    render() {
        return (
            <React.Fragment>
                <button className='button' onClick={this.handleClick}>{this.props.text}</button>
            </React.Fragment>
        )
    };
}

export default Button;