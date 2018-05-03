import * as React from 'react';
import {
  FormGroup,
  Input,
  Label,
  // Button,
} from 'reactstrap';

export default class RectangleFormConfigurator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      params: {
        centerX: null,
        centerY: null,
        height: null,
        width: null,
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
          <Label>X:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'centerX')}
          />
        </FormGroup>
        <FormGroup>
          <Label>Y:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'centerY')}
          />
        </FormGroup>
        <FormGroup>
          <Label>Ширина:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'width')}
          />
        </FormGroup>
        <FormGroup>
          <Label>Высота:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'height')}
          />
        </FormGroup>
      </div>
    );
  }
}