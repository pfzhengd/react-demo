import React from 'react';
import './style.scss';

// class Button extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.props.handleClick();
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <button className='button' onClick={this.handleClick}>{this.props.text}</button>
//             </React.Fragment>
//         )
//     };
// }

function Button(props) {
    let { handleClick, text } = props;
    //render(){
    return (
        <React.Fragment>
            <button className='button' onClick={handleClick}>{text}</button>
        </React.Fragment>
    );
    //};
}

export default Button;