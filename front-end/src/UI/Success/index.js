/**
 * Created by lakshmi on 07/06/18.
 */
/**
 * Created by lakshmi on 04/06/18.
 */
import React from 'react';
import './style.css';
import { Alert } from 'react-bootstrap';

export default class Success extends React.Component {
    render() {
        return (
            <Alert className="textAlign" bsStyle="success">
                <strong>Success </strong> {this.props.message}
            </Alert>
        );
    }
}