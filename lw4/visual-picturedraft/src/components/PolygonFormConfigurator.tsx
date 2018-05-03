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
          <Label>X центра:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Y центра:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Количество сторон:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Размер сторон:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
      </div>
    );
  }
}