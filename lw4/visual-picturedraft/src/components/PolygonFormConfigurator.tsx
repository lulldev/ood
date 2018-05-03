import * as React from 'react';
import {
  FormGroup,
  Input,
  Label,
  // Button,
} from 'reactstrap';

export default class PolygonFormConfigurator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      params: {
        centerX: 0,
        centerY: 0,
        numberOfSides: 0,
        sideSize: 0,
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
          <Label>X центра:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'centerX')}
          />
        </FormGroup>
        <FormGroup>
          <Label>Y центра:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'centerY')}

          />
        </FormGroup>
        <FormGroup>
          <Label>Количество сторон:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'numberOfSides')}
          />
        </FormGroup>
        <FormGroup>
          <Label>Размер сторон:</Label>
          <Input
            type="number"
            onChange={this.handleInputField.bind(this, 'sideSize')}
          />
        </FormGroup>
      </div>
    );
  }
}