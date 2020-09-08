import React from 'react';
import { FormGroup, Col, Input, Label } from 'reactstrap';

function RadioButton(props) {

    return (
        <Label check>
            <Input type="radio"
                name={props.name} /> {' '}
            {props.label}
        </Label>
    );
}

function RadioButtonForm(props) {

    return (
        <FormGroup row>
            <Col md-4>
                <FormGroup check>
                    <RadioButton name="options" label="Yes" />
                    <RadioButton name="options" label="No" />
                    <RadioButton name="options" label="No Thanks" />
                </FormGroup>
            </Col>
        </FormGroup>
    );

}

export default RadioButtonForm;