import React from 'react';
import Loading from '../components/loading';

function ShowInfo(props) {
    let { city, temp1, temp2, weather, loading } = props.info;
    if (loading) {
        return (
            <div>
                <ul>
                    <li>当时天气:</li>
                    <li><Loading /></li>
                </ul>
            </div>
        )
    }
    return (
        <div>
            <ul>
                <li>当时天气:</li>
                <li>
                    <span>{city}</span><span>{weather}</span><span>{temp1}</span><span>~</span><span>{temp2}</span>
                </li>
            </ul>
        </div>
    );
}

export default ShowInfo;
