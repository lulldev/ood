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
  harmonicViewModel: any;
}

export default class HarmonicGraphicControl extends React.Component<IProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      isEnableDelete: false,
      modal: false,
      selectedHarmonic: null
    };

    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.selectHarmonic = this.selectHarmonic.bind(this);
    this.deleteHarmonicFunction = this.deleteHarmonicFunction.bind(this);
  }

  public render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <label>Select harmonic function</label>
            <select multiple={true} className="form-control select-harmonic" onClick={this.selectHarmonic}>
              {
                this.props.harmonicViewModel.allFuncsToString().map((stringFunc: any, i: number) => {
                  return <option key={i} value={i}>{stringFunc}</option>;
                })
              }
            </select>
          </FormGroup>
          <FormGroup>
            <ButtonGroup>
              <Button color="success" onClick={this.toggle}>Add new</Button>
              <Button color="danger"
                      disabled={!this.state.isEnableDelete}
                      onClick={this.deleteHarmonicFunction}
              >Delete</Button>
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
                    <Input name="amplitude"
                           type="text"
                           className="form-control"
                           required={true}
                           defaultValue={'0'}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Frequency</label>
                    <Input name="frequency"
                           type="text"
                           className="form-control"
                           required={true}
                           defaultValue={'0'}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Phase</label>
                    <Input name="phase"
                           type="text"
                           className="form-control"
                           required={true}
                           defaultValue={'0'}
                    />
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
    const newFunction: any = {};
    formElems.forEach((elem: any) => {
      newFunction[elem.name] =  elem.value;
    });

    this.props.harmonicViewModel.setNewHarmonicFunction(newFunction);
    this.toggle();
  }

  private selectHarmonic(e: any) {
    this.setState({
      isEnableDelete: true,
      selectedHarmonic: e.target.value
    });
  }

  private deleteHarmonicFunction() {
    if (this.state.selectedHarmonic !== null) {
      this.props.harmonicViewModel.deleteHarmonicFuncByIndex(Number(this.state.selectedHarmonic));
    }
  }
}
