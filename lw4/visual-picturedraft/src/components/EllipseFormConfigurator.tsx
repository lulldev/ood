import * as React from 'react';
import {
  FormGroup,
  Input,
  Label,
  // Button,
} from 'reactstrap';

export default class EllipseFormConfigurator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      params: {
        height: 0,
        left: 0,
        top: 0,
        width: 0,
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
          <Label>Left:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'left')}
          />
        </FormGroup>
        <FormGroup>
          <Label>Top:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'top')}
          />
        </FormGroup>
        <FormGroup>
          <Label>Width:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'width')}
          />
        </FormGroup>
        <FormGroup>
          <Label>Height:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'height')}
          />
        </FormGroup>
      </div>
    );
  }
}