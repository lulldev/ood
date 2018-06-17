import { ICanvas } from './ICanvas';
import {Point} from '../standart/Point';
import {Color} from '../standart/Color';

export class Canvas implements ICanvas {

  public DrawLine(from: Point, to: Point): void {
    console.log(`<DrawLine fromX="${from.x}" fromY="${from.y}" toX="${to.x}" toY="${to.y}" />`);
  }

  public DrawRectangle(x: number, y: number, width: number, height: number): void {
    console.log(`Draw rectangle: x = ${x}, y = ${y}, width = ${width}, height = ${height}`);
  }

  public FillPolygon(points: Point[]) {
    console.log('<FillPolygon>');
    points.forEach((point: Point) => {
      console.log(`<Point x="${point.x}" y="${point.y}" />`);
    });
    console.log('</FillPolygon>\n');
  }

  public DrawEllipse(center: Point, horizontalRadius: number, verticalRadius: number) {
    console.log(`<DrawEllipse centerX="${center.x}" centerY="${center.y}" a="${horizontalRadius}" b="${verticalRadius}" />`);
  }

  public FillEllipse(center: Point, horizontalRadius: number, verticalRadius: number) {
    console.log(`<FillEllipse centerX="${center.x}" centerY="${center.y}" a="${horizontalRadius}" b="${verticalRadius}" />`);
  }

  public SetFillColor(fillColor: Color) {
    console.log(`<SetFillColor value="${fillColor.toString()}"/>\n`);
  }

  public SetOutlineColor(outlineColor: Color) {
    console.log(`<SetOutlineColor value="${outlineColor.toString()}"/>\n`);
  }

  public SetOutlineThickness(outlineThickness: number) {
    console.log(`<SetOutlineThickness value="${outlineThickness}"/>\n`);
  }
}
