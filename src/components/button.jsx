import React from 'react';

function Button(props) {
    let { handleClick, text, style } = props;
    return (
        <React.Fragment>
            <button className={style} onClick={handleClick}>{text}</button>
        </React.Fragment>
    );
}

export default Button;