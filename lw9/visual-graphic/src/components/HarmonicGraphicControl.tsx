import * as React from 'react';
import {
  Form,
  FormGroup,
  Button,
  ButtonGroup
} from 'reactstrap';

export default class HarmonicGraphicControl extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <label>Select harmonic function</label>
            <select multiple={true} className="form-control">
              <option>123</option>
              <option>123</option>
              <option>123</option>
            </select>
          </FormGroup>
          <FormGroup>
            <ButtonGroup>
              <Button color="success">Add new</Button>
              <Button color="danger" disabled={true}>Delete</Button>
            </ButtonGroup>
          </FormGroup>
        </Form>
      </div>
  );
  }
}
