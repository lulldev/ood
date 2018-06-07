import * as React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

import HarmonicGraphic from './HarmonicGraphic';
import HarmonicGraphicControl from './HarmonicGraphicControl';
import HarmonicViewModel from '../core/HarmonicViewModel';

class HarmonicFuncGraphContainer extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      harmonicViewModel: null,
    };
  }

  public componentWillMount() {
    this.setState({harmonicViewModel: new HarmonicViewModel(this)});
  }

  public render() {
    return (
      <Container>
        <Row>
          <Col lg={7}>
            <HarmonicGraphic
              harmonicViewModel={this.state.harmonicViewModel}
            />
          </Col>
          <Col lg={5}>
            <HarmonicGraphicControl
              harmonicViewModel={this.state.harmonicViewModel}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default HarmonicFuncGraphContainer;
