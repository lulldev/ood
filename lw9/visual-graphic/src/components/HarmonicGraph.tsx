import * as React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import { HarmonicFuncType } from '../core/HarmonicModel';
import GraphicControlView from './Control/GraphicControlView';
import GraphicView from './Graphic/GraphicView';

interface IState {
  harmonicList: HarmonicFuncType[];
}

class HarmonicGraph extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);

    this.state = {
      harmonicList: []
    };

    this.updateHarmonicList = this.updateHarmonicList.bind(this);
  }

  public updateHarmonicList(harmonicList: HarmonicFuncType[]) {
    this.setState({harmonicList});
  }

  public render() {
    return (
      <Container>
        <Row>
          <Col lg={7}>
            <GraphicView harmonicList={this.state.harmonicList}/>
          </Col>
          <Col lg={5}>
            <GraphicControlView
              harmonicList={this.state.harmonicList}
              updateHarmonicList={this.updateHarmonicList}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default HarmonicGraph;
