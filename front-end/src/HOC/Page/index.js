import React from 'react';
import './style.css';

export default class Page extends React.Component {
    render() {
        return (
            <div className="page-wrapper">
                <div className="body-container">
                    {
                        this.props.children
                    }
                </div>
            </div>
        );
    }
}