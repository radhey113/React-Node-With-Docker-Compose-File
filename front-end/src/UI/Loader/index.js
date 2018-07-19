import React from 'react';
import './style.css';

const Loader = (props) => {
    return (
        <div className={"loader "+props.color}>
        </div>
    );
}

export default Loader;

