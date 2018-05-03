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
      isVisible: false
    };
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
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Y1:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>X2:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Y2:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>X3:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Y3:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
      </div>
    );
  }
}