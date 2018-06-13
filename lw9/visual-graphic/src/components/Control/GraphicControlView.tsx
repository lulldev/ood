import * as React from 'react';
import {
  Form,
  Input,
  FormGroup,
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import GraphicControlPresenter from './GraphicControlPresenter';

interface IProps {
  harmonicList: any;
  updateHarmonicList: any;
}

interface IState {
  isEnableDelete: boolean;
  isEnableEdit: boolean;
  modal: boolean;
  selectedHarmonicIndex: any;
  selectedHarmonicData: any;
}

export default class GraphicControlView extends React.Component<IProps, IState> {

  private presenter: any = new GraphicControlPresenter();

  constructor(props: any) {
    super(props);

    this.presenter.setView(this);

    this.state = {
      isEnableDelete: false,
      isEnableEdit: false,
      modal: false,
      selectedHarmonicData: {},
      selectedHarmonicIndex: null,
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectHarmonic = this.handleSelectHarmonic.bind(this);
    this.handleAddHarmonicFunction = this.handleAddHarmonicFunction.bind(this);
    this.handleDeleteHarmonicFunction = this.handleDeleteHarmonicFunction.bind(this);
    this.handleEditHarmonicFunction = this.handleEditHarmonicFunction.bind(this);
  }

  public render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <label>Select harmonic function</label>
            <select multiple={true} className="form-control select-harmonic" onChange={this.handleSelectHarmonic}>
              {
                this.presenter.stringFuncArr().map((stringFunc: any, i: number) => {
                  return <option key={i} value={i}>{stringFunc}</option>;
                })
              }
            </select>
          </FormGroup>
          <FormGroup>
            <ButtonGroup>
              <Button color="success" onClick={this.handleAddHarmonicFunction}>Add new</Button>
              <Button color="warning"
                      disabled={!this.state.isEnableDelete}
                      onClick={this.handleEditHarmonicFunction}
              >Edit</Button>
              <Button color="danger"
                      disabled={!this.state.isEnableEdit}
                      onClick={this.handleDeleteHarmonicFunction}
              >Delete</Button>
            </ButtonGroup>
          </FormGroup>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className="modify-function-modal">
            <Form onSubmit={this.handleSubmit}>
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

  public toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  public showAddForm() {
    this.setState({ isEnableEdit: false });
    this.toggle();
  }

  public showEditForm(selectedHarmonicData: any) {
    this.setState({
      isEnableEdit: true, selectedHarmonicData
    });
    this.toggle();
  }

  public updateHarmonicList(harmonicList: any) {
    this.props.updateHarmonicList(harmonicList);
  }

  public hideAddForm() {
    this.toggle();
  }

  public hideEditForm() {
    this.toggle();
  }

  public showError(errMsg: string) {
    alert(errMsg);
  }

  // ===== VIEW MANAGEMENT

  private handleSubmit(e: any) {

    if (e) {
      e.preventDefault();
    }

    const formElems: any = Array.from(e.target.getElementsByClassName('form-control'));
    const newFunction: any = {};
    formElems.forEach((elem: any) => {
      newFunction[elem.name] =  elem.value;
    });

    if (this.state.isEnableEdit) {
      this.presenter.editHarmonicFunc(this.state.selectedHarmonicIndex, newFunction);
    } else {
      this.presenter.addHarmonicFunc(newFunction);
    }
  }

  private handleSelectHarmonic(e: any) {
    this.setState({
      isEnableDelete: true,
      isEnableEdit: true,
      selectedHarmonicIndex: Number(e.target.value)
    });
  }

  private handleAddHarmonicFunction() {
    this.presenter.showAddForm();
  }

  private handleDeleteHarmonicFunction() {
    if (this.state.selectedHarmonicIndex !== null) {
      this.presenter.deleteHarmonicFuncByIndex(this.state.selectedHarmonicIndex);
    }
  }

  private handleEditHarmonicFunction() {
    if (this.state.selectedHarmonicIndex !== null) {
      this.presenter.showEditForm(this.state.selectedHarmonicIndex);
    }
  }
}
