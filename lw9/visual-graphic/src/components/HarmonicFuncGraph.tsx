import * as React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

import HarmonicGraphic from './HarmonicGraphic';
import HarmonicGraphicControl from './HarmonicGraphicControl';

class HarmonicFuncGraphContainer extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Container>
        <Row>
          <Col lg={7}>
            <HarmonicGraphic/>
          </Col>
          <Col lg={5}>
            <HarmonicGraphicControl/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default HarmonicFuncGraphContainer;
