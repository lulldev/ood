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
  presenter: any;
}

interface IState {
  isEnableDelete: boolean;
  isEnableEdit: boolean;
  modal: boolean;
  selectedHarmonic: any;
  selectedHarmonicData: any;
}

export default class GraphicControlView extends React.Component<IProps, IState> {

  private presenter: any;

  constructor(props: any) {
    super(props);

    this.presenter = props.presenter;
    this.presenter.setView(this);

    this.state = {
      isEnableDelete: false,
      isEnableEdit: false,
      modal: false,
      selectedHarmonic: null,
      selectedHarmonicData: {}
    };

    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.selectHarmonic = this.selectHarmonic.bind(this);
    this.addHarmonicFunction = this.addHarmonicFunction.bind(this);
    this.deleteHarmonicFunction = this.deleteHarmonicFunction.bind(this);
    this.editHarmonicFunction = this.editHarmonicFunction.bind(this);
  }

  public render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <label>Select harmonic function</label>
            <select multiple={true} className="form-control select-harmonic" onChange={this.selectHarmonic}>
              {
                this.props.harmonicViewModel.allFuncsToString().map((stringFunc: any, i: number) => {
                  return <option key={i} value={i}>{stringFunc}</option>;
                })
              }
            </select>
          </FormGroup>
          <FormGroup>
            <ButtonGroup>
              <Button color="success" onClick={this.addHarmonicFunction}>Add new</Button>
              <Button color="warning"
                      disabled={!this.state.isEnableDelete}
                      onClick={this.editHarmonicFunction}
              >Edit</Button>
              <Button color="danger"
                      disabled={!this.state.isEnableEdit}
                      onClick={this.deleteHarmonicFunction}
              >Delete</Button>
            </ButtonGroup>
          </FormGroup>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className="modify-function-modal">
            <Form onSubmit={this.onSubmit}>
              <ModalHeader toggle={this.toggle}>
                {!this.state.isEnableEdit ? 'Create' : 'Edit' } harmonic function
              </ModalHeader>
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
                           defaultValue={
                             this.state.isEnableEdit ? this.state.selectedHarmonicData.amplitude : '0'}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Frequency</label>
                    <Input name="frequency"
                           type="text"
                           className="form-control"
                           required={true}
                           defaultValue={
                             this.state.isEnableEdit ? this.state.selectedHarmonicData.frequency : '0'}
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Phase</label>
                    <Input name="phase"
                           type="text"
                           className="form-control"
                           required={true}
                           defaultValue={
                             this.state.isEnableEdit ? this.state.selectedHarmonicData.phase : '0'}
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

  // ===== PRESENTER ACTIONS

  // ===== VIEW MANAGEMENT

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

    this.toggle();

    if (this.props.harmonicViewModel.isFunctionValid(newFunction)) {
      this.props.harmonicViewModel.setNewHarmonicFunction(newFunction);
      if (this.state.isEnableEdit) {
        this.props.harmonicViewModel.deleteHarmonicFuncByIndex(newFunction);
      }
    } else {
      alert('Invalid params');
    }
  }

  private selectHarmonic(e: any) {
    this.setState({
      isEnableDelete: true,
      isEnableEdit: true,
      selectedHarmonic: e.target.value
    });
  }

  private addHarmonicFunction() {
    this.setState({ isEnableEdit: false });
    this.toggle();
  }

  private deleteHarmonicFunction() {
    if (this.state.selectedHarmonic !== null) {
      this.props.harmonicViewModel.deleteHarmonicFuncByIndex(Number(this.state.selectedHarmonic));
    }
  }

  private editHarmonicFunction() {
    if (this.state.selectedHarmonic !== null) {
      this.setState({
        isEnableEdit: true,
        selectedHarmonicData: this.props.harmonicViewModel.selectByIndex(this.state.selectedHarmonic)
      });
      this.toggle();
    }
  }
}
