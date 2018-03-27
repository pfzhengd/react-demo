import React from 'react';

function ShowItem({ id, text,numStyle,handleClick }) {
    return (
        <React.Fragment>
            <div onClick={handleClick}><span className={numStyle}>{id}. </span><span>{text}</span></div>
        </React.Fragment>
    );
}

export default ShowItem;