import * as React from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from 'reactstrap';

import EllipseFormConfigurator from './EllipseFormConfigurator';
import PolygonFormConfigurator from './PolygonFormConfigurator';
import RectangleFormConfigurator from './RectangleFormConfigurator';
import TriangleFormConfigurator from './TriangleFormConfigurator';

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
                <select className="form-control required">
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
                  required={true}
                />
              </FormGroup>

              <RectangleFormConfigurator/>
              <TriangleFormConfigurator/>
              <EllipseFormConfigurator/>
              <PolygonFormConfigurator/>

              <ButtonGroup>
                <Button>Add shape</Button>
                <Button color="success">Draw picture</Button>
              </ButtonGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PictureDraft;
