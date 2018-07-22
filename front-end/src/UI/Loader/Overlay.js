import React from 'react';
import './style.css';

/** Overlay **/
const Overlay = (props) => {

    return (
        <div id="overlay" style={{"display": props.hide}} onClick={props.hideOverlay} >{props.children}</div>
    )
};

export default Overlay;