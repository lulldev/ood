import * as React from 'react';
import {
  FormGroup,
  Input,
  Label,
  // Button,
} from 'reactstrap';

export default class TriangleFormConfigurator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      params: {
        x1: null,
        x2: null,
        x3: null,
        y1: null,
        y2: null,
        y3: null,
      }
    };
  }
  public handleInputField(name: string, event: any): void {
    const currentState = this.state.params;
    currentState[name] = event.target.value;
    this.setState({params: currentState});
    this.props.inputHandler(this.state.params);
  }
  public render() {
    if (!this.props.isVisible) {
      return null;
    }
    return (
      <div>
        <FormGroup>
          <Label>X1:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'x1')}
          />
        </FormGroup>
        <FormGroup>
          <Label>Y1:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'y1')}
          />
        </FormGroup>
        <FormGroup>
          <Label>X2:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'x2')}
          />
        </FormGroup>
        <FormGroup>
          <Label>Y2:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'y2')}
          />
        </FormGroup>
        <FormGroup>
          <Label>X3:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'x3')}
          />
        </FormGroup>
        <FormGroup>
          <Label>Y3:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'y3')}
          />
        </FormGroup>
      </div>
    );
  }
}