/**
 * Created by lakshmi on 05/06/18.
 */


import React from 'react';
import './style.css';
import { FormGroup, Col, Button } from 'react-bootstrap';

const ClickButton = (props)=>{
    return (
        <FormGroup controlId="formHorizontalEmail" className="formGroup">

            <Col sm={12} className="DropDownCol">
                <Button
                    value={props.title}
                    bsStyle={props.sClass}
                    onClick={props.changeTextColor}
                >
                    {props.title}
                </Button>
            </Col>
        </FormGroup>
    )
};

export default ClickButton;
