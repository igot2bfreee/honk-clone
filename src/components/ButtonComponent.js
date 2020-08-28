import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

class Note extends Component {

    constructor(props) {
        super(props);

        this.state = {
            noteText: 'Skip  ',
            touched: {
                notes: false,
            }
        };

        this.updateText = this.updateText.bind(this);
    }

    updateText() {
        if (this.state.touched.notes) {
            this.setState({
                noteText: 'Save Note  '
            });
        }
    }

    render() {
        return (
            <div className="container">
                <Form>
                    <FormGroup row>
                        <Label htmlFor="notes" ml-auto="true">Please provide any additional details you might like us to know about your request.</Label>
                        <Col ml-auto md={4}>
                            <Input type="textarea" id="notes" name="notes" value="" onChange={this.updateText()} />
                        </Col>
                    </FormGroup>
                </Form>
                <Button>{this.state.noteText}</Button><i className="fa fa-long-arrow-right" />
            </div>
        );
    }
}

export default Note;