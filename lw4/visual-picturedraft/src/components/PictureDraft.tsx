import * as React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from 'reactstrap';

import RectangleFormConfigurator from './RectangleFormConfigurator';
import TriangleFormConfigurator from './TriangleFormConfigurator';
import EllipseFormConfigurator from './TriangleFormConfigurator';
import PolygonFormConfigurator from './TriangleFormConfigurator';

class PictureDraft extends React.Component {
  public render() {
    return (
      <Container>
        <Row>
          <Col lg={8}>
            <canvas id="canvas-area"/>
          </Col>
          <Col lg={4}>
            <Form>
              <FormGroup>
                <select className="form-control shape-type">
                  <option/>
                  <option value="rectangle">Rectangle</option>
                  <option value="triangle">Triangle</option>
                  <option value="ellipse">Ellipse</option>
                  <option value="polygon">Polygon</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label>Цвет фигуры:</label>
                <Input
                  type="color"
                  className="form-control"
                  value="#fff"
                />
              </FormGroup>

              <RectangleFormConfigurator/>
              <TriangleFormConfigurator/>
              <EllipseFormConfigurator/>
              <PolygonFormConfigurator/>

              <FormGroup>
                <Button>Draw picture</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PictureDraft;
