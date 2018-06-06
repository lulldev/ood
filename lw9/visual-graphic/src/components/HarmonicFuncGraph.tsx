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
    this.state = {
      harmonicFunctions: []
    };
    this.setFunctionData = this.setFunctionData.bind(this);
  }

  public render() {
    return (
      <Container>
        <Row>
          <Col lg={7}>
            <HarmonicGraphic harmonicFunctions={this.state.harmonicFunctions} />
          </Col>
          <Col lg={5}>
            <HarmonicGraphicControl setFunctionData={this.setFunctionData} />
          </Col>
        </Row>
      </Container>
    )
  }

  private setFunctionData(data: any) {
    const harmonicFunctions = this.state.harmonicFunctions;
    harmonicFunctions.push(data);
    this.setState({ harmonicFunctions});
  }
}

export default HarmonicFuncGraphContainer;
