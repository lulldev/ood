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
import { Client } from '../picture-draft/Client';
import { Designer } from '../picture-draft/Designer';
import { PictureDraft } from '../picture-draft/PictureDraft';
import { Canvas } from '../picture-draft/Canvas';

import EllipseFormConfigurator from './EllipseFormConfigurator';
import PolygonFormConfigurator from './PolygonFormConfigurator';
import RectangleFormConfigurator from './RectangleFormConfigurator';
import TriangleFormConfigurator from './TriangleFormConfigurator';

const CANVAS_HTML_ID = 'canvas-area';

class PictureDraftContainer extends React.Component<any, any> {
  private draft: PictureDraft;
  private canvas: Canvas;
  constructor (props: any) {
    super(props);

    this.draft = new PictureDraft(new Client('Client'), new Designer());
    this.canvas = new Canvas(CANVAS_HTML_ID);
        console.log(this.draft);
    console.log(this.canvas);

    this.state = {
      isShowEllipseForm: false,
      isShowPolygonForm: false,
      isShowRectangleForm: false,
      isShowTriangleForm: false,
    };
    this.handleShapeChange = this.handleShapeChange.bind(this);
    this.handleAddShape = this.handleAddShape.bind(this);
    this.handleDrawPictire = this.handleDrawPictire.bind(this);
  }
  public handleShapeChange(event: any): void {
    const shape = event.target.value;

    this.setState({
      isShowEllipseForm: false,
      isShowPolygonForm: false,
      isShowRectangleForm: false,
      isShowTriangleForm: false,
    });

    switch (shape) {
      case 'rectangle':
        this.setState({ isShowRectangleForm: true });
        break;
      case 'triangle':
        this.setState({ isShowTriangleForm: true });
        break;
      case 'ellipse':
        this.setState({ isShowEllipseForm: true });
        break;
      case 'polygon':
        this.setState({ isShowPolygonForm: true });
        break;
    }
  }
  public handleAddShape(): void {
    // this.draft.AddShape();
  }
  public handleDrawPictire(): void {
    this.draft.DrawPicture(this.canvas);
  }
  public render() {
    return (
      <Container>
        <Row>
          <Col lg={8}>
            <canvas id={CANVAS_HTML_ID}/>
          </Col>
          <Col lg={4}>
            <Form>
              <FormGroup>
                <select className="form-control required" onChange={this.handleShapeChange}>
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

              <RectangleFormConfigurator isVisible={this.state.isShowRectangleForm}/>
              <TriangleFormConfigurator isVisible={this.state.isShowTriangleForm}/>
              <EllipseFormConfigurator isVisible={this.state.isShowEllipseForm}/>
              <PolygonFormConfigurator isVisible={this.state.isShowPolygonForm}/>

              <ButtonGroup>
                <Button onClick={this.handleAddShape}>Add shape</Button>
                <Button onClick={this.handleDrawPictire} color="success">Draw picture</Button>
              </ButtonGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PictureDraftContainer;
