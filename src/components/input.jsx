import React from 'react';

function Input({ handleChanged, placeholder ,style}) {
    return (
        <React.Fragment>
            <input className={style} onChange={handleChanged} placeholder={placeholder} />
        </React.Fragment>
    );
}

export default Input;



// class Input extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: ''
//         }
//         this.handleChanged = this.handleChanged.bind(this);
//     }

//     handleChanged(){
//         // this.setState({
//         //     value:
//         // })
//     }

//     render() {
//         let {handleChanged,placeholder} = this.props;
//         return (
//             <React.Fragment>
//                 <input onChange={handleChanged} value={this.state.value} placeholder={placeholder} />
//             </React.Fragment>
//         );
//     }

// }