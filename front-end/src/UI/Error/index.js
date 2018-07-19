import React from 'react';
import { Alert } from 'react-bootstrap';
import './style.css';

export default class Error extends React.Component {
    render() {
        return (
            <Alert className="textAlign" bsStyle="danger">
                <strong>Error </strong> {this.props.message}
            </Alert>
        );
    }
}