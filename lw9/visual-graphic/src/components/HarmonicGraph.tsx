import * as React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

// import HarmonicGraphic from './Graphic/HarmonicGraphic';
import GraphicControlView from './Control/GraphicControlView';
import { HarmonicFuncType } from '../core/HarmonicModel';

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

            {/*<HarmonicGraphic harmonicList={this.state.harmonicList}/>*/}
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
