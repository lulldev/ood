import * as React from 'react';
import {
  Form,
  Input,
  Label,
  FormGroup,
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

interface IProps {
  setFunctionData: any;
}

export default class HarmonicGraphicControl extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      functionList: [],
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  public render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <label>Select harmonic function</label>
            <select multiple={true} className="form-control">
              {
                this.state.functionList.map((func: string, i: number) => {
                  return (<option key={i}>{func}</option>);
                })
              }
            </select>
          </FormGroup>
          <FormGroup>
            <ButtonGroup>
              <Button color="success" onClick={this.toggle}>Add new</Button>
              <Button color="danger" disabled={true}>Delete</Button>
            </ButtonGroup>
          </FormGroup>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className="create-function-modal">
            <Form onSubmit={this.onSubmit}>
              <ModalHeader toggle={this.toggle}>Create harmonic function</ModalHeader>
              <ModalBody>
                  <FormGroup>
                    <label>Function</label>
                    <select name="function" className="form-control">
                      <option>sin</option>
                      <option>cos</option>
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <label>Amplitude</label>
                    <Input name="amplitude" type="number" className="form-control" />
                  </FormGroup>
                  <FormGroup>
                    <label>Frequency</label>
                    <Input name="frequency" type="number" className="form-control" />
                  </FormGroup>
                  <FormGroup>
                    <label>Phase</label>
                    <Input name="phase" type="number" className="form-control" />
                  </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" type="submit">Save</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Form>
          </Modal>

        </Form>
      </div>
    );
  }

  private toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  private onSubmit(e: any) {

    if (e) {
      e.preventDefault();
    }

    const formElems: any = Array.from(e.target.getElementsByClassName('form-control'));
    const functionData: any = {};
    formElems.forEach((elem: any) => {
      functionData[elem.name] =  elem.value;
    });

    this.props.setFunctionData(functionData);
    const functionList = this.state.functionList;
    functionList.push(`${functionData.frequency}+${functionData.amplitude}*${functionData.function}(x+${functionData.phase})`);
    this.setState({functionList});

    this.toggle();
  }
}
