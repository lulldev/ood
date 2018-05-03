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
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Y:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Ширина:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Высота:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
      </div>
    );
  }
}