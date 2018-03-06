import React from 'react';
import './style.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //let count = this.props.count + 1;
        // this.setState({
        //     count: count
        // })
        this.props.parentMethod();
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