import React from 'react';

function ShowItem({ id, text,numStyle }) {
    return (
        <React.Fragment>
            <span className={numStyle}>{id}. </span><span>{text}</span>
        </React.Fragment>
    );
}

export default ShowItem;