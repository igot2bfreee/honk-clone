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

class Notes2 extends Component {

    constructor(props) {
      super(props);
      this.state = {
          value: '',
          buttonText: 'Skip',
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A note was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Label>Please provide any additional details you might like us to know about your request.
            <Input type="text" value={this.state.value} onChange={this.handleChange} />
          </Label>
          <Input type="submit" value={this.state.buttonText} />
        </Form>
      );
    }
  }

export default Note;