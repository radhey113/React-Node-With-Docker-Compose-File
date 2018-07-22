import React from 'react';
import './style.css';

const ElmLoader = (props) => {
    return (
        <div className={"loader "+props.color}>
        </div>
    );
}

export default ElmLoader;

