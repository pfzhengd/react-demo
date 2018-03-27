import React from 'react';

function ShowInfo(props) {
    let { city, temp1, temp2, weather } = props.info;
    return (
        <div>
            <ul>
                <li>当时天气:</li>
                <li><span>{city}</span><span>{weather}</span><span>{temp1}</span><span>~</span><span>{temp2}</span></li>
            </ul>
        </div>
    );
}

export default ShowInfo;
