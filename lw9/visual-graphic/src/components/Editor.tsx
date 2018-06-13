import * as React from 'react';
import {
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import HarmonicGraph from './HarmonicGraph';

interface IState {
  currentDataSource: number;
  dataSource: any;
  modal: boolean;
}

class Editor extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      currentDataSource: 0,
      dataSource: {0: [], 1: []},
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  public toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  public handleOpen(graphNum: number) {
    this.setState({ currentDataSource: graphNum });
    this.toggle();
  }

  public render() {
    const currentHarmonicList = this.state.dataSource[this.state.currentDataSource];
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="graph-modal" size="lg">
          <ModalHeader>Graph {this.state.currentDataSource + 1}</ModalHeader>
          <ModalBody>
            <HarmonicGraph harmonicList={currentHarmonicList}/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <ButtonGroup>
          <Button color="primary" onClick={this.handleOpen.bind(this, 0)}>Open Graph 1</Button>
          <Button color="success" onClick={this.handleOpen.bind(this, 1)}>Open Graph 2</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default Editor;
