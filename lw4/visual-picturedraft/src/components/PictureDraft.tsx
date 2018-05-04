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
import ShapeStore from './ShapeStore';

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
      shapeColor: '#000',
      shapeParams: {},
      shapeStore: [],
      shapeType: '',
    };
    this.handleShapeChange = this.handleShapeChange.bind(this);
    this.handleAddShape = this.handleAddShape.bind(this);
    this.handleDrawPictire = this.handleDrawPictire.bind(this);
    this.inputShapeHandler = this.inputShapeHandler.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }
  public handleColorChange(event: any): void {
    this.setState({shapeColor: event.target.value});
  }
  public inputShapeHandler(params: any): void {
    this.setState({ shapeParams: params });
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
        this.setState({ isShowRectangleForm: true, shapeType: shape });
        break;
      case 'triangle':
        this.setState({ isShowTriangleForm: true, shapeType: shape });
        break;
      case 'ellipse':
        this.setState({ isShowEllipseForm: true, shapeType: shape });
        break;
      case 'regular_polygon':
        this.setState({ isShowPolygonForm: true, shapeType: shape });
        break;
    }
  }
  public handleAddShape(): void {
    try {
      const type = this.state.shapeType;
      const params = this.state.shapeParams;
      const color = this.state.shapeColor;
      this.draft.AddShape({ type, color, ...params});
      this.setState({shapeStore: this.draft.GetShapesStore()});
    }
    catch (e) {
      alert(e.message);
    }
    console.log(this.draft);
  }
  public handleDrawPictire(): void {
    if (this.draft.GetShapesCount() === 0) {
      alert('Нет фигур для рисования. Добавьте фигуры');
      return;
    }
    this.draft.DrawPicture(this.canvas);
  }
  public render() {
    return (
      <Container>
        <Row>
          <Col lg={8}>
            <canvas id={CANVAS_HTML_ID}/>
            <ShapeStore shapeStore={this.state.shapeStore}/>
          </Col>
          <Col lg={4}>
            <Form>
              <FormGroup>
                <select className="form-control required"
                        onChange={this.handleShapeChange}
                        defaultValue={''}
                >
                  <option value=""/>
                  <option value="rectangle">Прямоугольник</option>
                  <option value="triangle">Треугольник</option>
                  <option value="ellipse">Эллипс</option>
                  <option value="regular_polygon">Многоугольник</option>
                </select>
              </FormGroup>

              <FormGroup>
                <label>Цвет фигуры:</label>
                <Input
                  type="color"
                  className="form-control"
                  defaultValue={'#000'}
                  required={true}
                  onChange={this.handleColorChange}
                />
              </FormGroup>

              <RectangleFormConfigurator
                  isVisible={this.state.isShowRectangleForm}
                  inputHandler={this.inputShapeHandler}
              />
              <TriangleFormConfigurator
                  isVisible={this.state.isShowTriangleForm}
                  inputHandler={this.inputShapeHandler}
              />
              <EllipseFormConfigurator
                  isVisible={this.state.isShowEllipseForm}
                  inputHandler={this.inputShapeHandler}
              />
              <PolygonFormConfigurator
                  isVisible={this.state.isShowPolygonForm}
                  inputHandler={this.inputShapeHandler}
              />

              <ButtonGroup>
                <Button onClick={this.handleAddShape}>Добавить фигуру</Button>
                <Button onClick={this.handleDrawPictire} color="success">Нарисовать картинку</Button>
              </ButtonGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PictureDraftContainer;
