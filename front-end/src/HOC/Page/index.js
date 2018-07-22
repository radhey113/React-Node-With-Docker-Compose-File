import React from 'react';
import './style.css';

const Page = (props) => {
    return (
        <div className={props.wraperClass} style={props.style}>
            {
                props.children
            }
        </div>
    );
};

export default Page;