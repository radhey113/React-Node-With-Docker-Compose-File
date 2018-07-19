import React from 'react';
import { FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';
import './style.css';

export default class Input extends React.Component {

    render() {
        return (
                <FormGroup controlId="formHorizontalEmail" className="formGroup">

                    <Col sm={6}>
                        <Col componentClass={ControlLabel} sm={12} className="Label">
                            {this.props.label}
                        </Col>
                        <FormControl
                            type={this.props.type}
                            placeholder={this.props.label}
                            name={this.props.name}
                            onChange={this.props.onchangeEvent.bind(this)}
                            required
                        />
                    </Col>
                </FormGroup>
        )
    }
}