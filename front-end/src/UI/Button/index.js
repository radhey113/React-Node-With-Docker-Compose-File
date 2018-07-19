/**
 * Created by lakshmi on 05/06/18.
 */


import React from 'react';
import './style.css';
import { FormGroup, Col, Button } from 'react-bootstrap';

const ClickButton = (props)=>{
    return (
        <FormGroup controlId="formHorizontalEmail" className="formGroup">

            <Col sm={6} className="DropDownCol">
                <Button
                    value={props.title}
                    bsStyle="primary"
                    type={props.type}
                >
                    {props.title}
                </Button>
            </Col>
        </FormGroup>
    )
};

export default ClickButton;
