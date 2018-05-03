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
          <Label>Left:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Top:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Width:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
        <FormGroup>
          <Label>Height:</Label>
          <Input
            type="number"
            defaultValue={'10'}
          />
        </FormGroup>
      </div>
    );
  }
}