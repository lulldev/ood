import {Client} from '../src/picture-draft/Client';
import {Designer} from '../src/picture-draft/Designer';
import {Canvas} from "../src/picture-draft/Canvas";
import {Color} from "../src/picture-draft/Color";
import {PictureDraft} from "../src/picture-draft/PictureDraft";
import {Ellipse, Rectangle, RegularPolygon, Triangle} from "../src/picture-draft/Shape";
import {ShapeFactory} from "../src/picture-draft/ShapeFactory";
import {Painter} from "../src/picture-draft/Painter";

let outputLog: string[] = [];

const outputHookHelper: (param: string) => (void) = (param: string) => {
  if (param) {
    outputLog.push(param);
  }
};

const outputLogClear: () => (void) = () => outputLog = [];

describe('PictureDraft', () => {

  describe('Client', () => {

    it('Falsy client name must throw', () => {
      expect(() => new Client(undefined)).toThrow('Name must be no-empty string');
      expect(() => new Client(null)).toThrow('Name must be no-empty string');
    });

    it('Empty string client name must throw', () => {
      expect(() => new Client('')).toThrow('Name must be no-empty string');
    });

    it('Client name can get by method', () => {
      const client = new Client('Ivan');
      expect(client.GetName()).toEqual('Ivan');
    });
  });

  describe('Designer', () => {
    const shapeFactory = new ShapeFactory();
    const designer = new Designer(shapeFactory);

    it('Invalid add by designer must throw', () => {
      expect(() => designer.AddShape({type: 'triangle', x: 1, y: 1})).toThrow('Invalid triangle params');
    });

    it('Valid shape by designer not throw', () => {
      expect(() => designer.AddShape(
        {type: 'rectangle', centerX: 10, centerY: 10, width: 30, height: 100 }))
        .not.toThrow('Invalid triangle params');
    });
  });

  describe('Painter', () => {
    const shapeFactory = new ShapeFactory();
    const designer = new Designer(shapeFactory);
    const painter = new Painter();
    const canvas = new Canvas(outputHookHelper);

    it('Painter can draw draft', () => {
      outputLogClear();
      designer.AddShape({type: 'rectangle', centerX: 10, centerY: 10, width: 200, height: 200});
      const draft = designer.CreateDraft();
      painter.DrawPicture(canvas, draft);

      expect(outputLog).toEqual([
        'Canvas color #fff',
        'Draw rectangle: x = 10, y = 10, width = 200, height = 200',
      ]);
    });
  });

  describe('Canvas', () => {

    outputLogClear();
    const canvas = new Canvas(outputHookHelper);

    it('Default canvas color is white', () => {
      expect(canvas.GetCanvasColor()).toEqual(Color.White);
    });

    it('Canvas can set color', () => {
      outputLogClear();
      canvas.SetCanvasColor(Color.Blue);
      expect(canvas.GetCanvasColor()).toEqual(Color.Blue);
      expect(outputLog).toEqual(['Set canvas color #0000ff']);
    });

    it('Canvas can move to point', () => {
      outputLogClear();
      canvas.MoveTo(10, 10);
      expect(outputLog).toEqual(['Move to: [10:10]']);
      canvas.MoveTo(50, 120);
      expect(outputLog).toEqual(['Move to: [10:10]', 'Move to: [50:120]']);
    });

    it('Canvas can draw line', () => {
      outputLogClear();
      canvas.DrawLine(0, 100);
      canvas.DrawLine(40, 10);
      expect(outputLog).toEqual([
        'Draw line: from 0 to 100',
        'Draw line: from 40 to 10',
      ]);
    });

    it('Canvas can draw rectangle', () => {
      outputLogClear();
      canvas.DrawRectangle(50, 50, 150, 200);
      canvas.DrawRectangle(10, 20, 550, 200);
      expect(outputLog).toEqual([
        'Draw rectangle: x = 50, y = 50, width = 150, height = 200',
        'Draw rectangle: x = 10, y = 20, width = 550, height = 200',
      ]);
    });

    it('Canvas can draw ellipse', () => {
      outputLogClear();
      canvas.DrawEllipse(50, 50, 100, 120);
      canvas.DrawEllipse(10, 20, 30, 25);
      expect(outputLog).toEqual([
        'Draw ellipse: center = [50;50], v = 100, h = 120',
        'Draw ellipse: center = [10;20], v = 30, h = 25',
      ]);
    });

    it('Canvas can draw polygon', () => {
      outputLogClear();
      canvas.DrawPolygon(50, 50, 5, 10);
      canvas.DrawPolygon(100, 50, 10, 5);
      expect(outputLog).toEqual([
        'Draw polygon: center = [50;50], sides count = 5, side size = 10',
        'Draw polygon: center = [100;50], sides count = 10, side size = 5',
      ]);
    });

    it('Canvas can draw triangle', () => {
      outputLogClear();
      canvas.DrawTriangle(50, 50, 5, 10, 15, 30);
      expect(outputLog).toEqual([
        'Draw triangle',
        'Move to: [50:50]',
        'Draw line: from 5 to 10',
        'Draw line: from 15 to 30',
        'Draw line: from 50 to 50',
      ]);
    });

  });

  describe('Shapes', () => {

    describe('Rectangle', () => {

      it('Invalid rectangle params must throw', () => {
        const wrongCoord: any = '';
        expect(() => new Rectangle(wrongCoord, 0, -20, -20))
          .toThrow('Invalid rectangle params');
      });

      const rectangle = new Rectangle(10, 10, 200, 100);

      it('Rectangle can return left top', () => {
        expect(rectangle.GetLeftTop()).toEqual({x: 10, y: 10});
      });

      it('Rectangle can return right bottom', () => {
        expect(rectangle.GetRightBottom()).toEqual({x: 110, y: 210});
      });
    });

    describe('Triangle', () => {

      it('Invalid triangle params must throw', () => {
        const wrongCoord: any = '';
        expect(() => new Triangle(wrongCoord, 2, wrongCoord, -20, 10, -20))
          .toThrow('Invalid triangle params');
      });

      const triangle = new Triangle(10, 20, 30, 40, 50, 20);

      it('Triangle can return vertex', () => {
        expect(triangle.GetVertex1()).toEqual({x: 10, y: 20});
        expect(triangle.GetVertex2()).toEqual({x: 30, y: 40});
        expect(triangle.GetVertex3()).toEqual({x: 50, y: 20});
      });
    });

    describe('Ellipse', () => {

      it('Invalid ellipse params must throw', () => {
        const wrongCoord: any = '';
        expect(() => new Ellipse(wrongCoord, 1, -20, -20))
          .toThrow('Invalid ellipse params');
      });

      const ellipse = new Ellipse(50, 50, 100, 150);

      it('Ellipse can return center', () => {
        expect(ellipse.GetCenter()).toEqual({x: 50, y: 50});
      });

      it('Ellipse can return horizontal radius', () => {
        expect(ellipse.GetHorizontalRadius()).toEqual(50);
      });

      it('Ellipse can return vertical radius', () => {
        expect(ellipse.GetVerticalRadius()).toEqual(75);
      });
    });

    describe('Regular polygon', () => {

      it('Invalid rectangle polygon params must throw', () => {
        const wrongCoord: any = '';
        expect(() => new RegularPolygon(wrongCoord, 1, -20, -20))
          .toThrow('Invalid regular-polygon params');
      });

      const regularPolygon = new RegularPolygon(50, 50, 5, 20);

      it('Regular-polygon can return vertex count', () => {
        expect(regularPolygon.GetVertexCount()).toEqual(5);
      });

      it('Regular-polygon can return center', () => {
        expect(regularPolygon.GetCenter()).toEqual({x: 50, y: 50});
      });
    });
  });

  describe('Picture draft House development', () => {

    const client = new Client('Ivan');
    const shapeFactory = new ShapeFactory();
    const designer = new Designer(shapeFactory);
    const painter = new Painter();
    const canvas = new Canvas(outputHookHelper);

    const clientDemands = {
      roofColor: Color.Blue,
      bodyColor: Color.White,
      houseWidth: 150,
      houseHeight: 200,
    };

    it('Designer build project and painter draw picture', () => {

      outputLogClear();

      const roofHeight = 30;

      const roof: object = {
        type: 'triangle',
        x1: 10,
        y1: 30,
        x2: clientDemands.houseWidth,
        y2: roofHeight,
        x3: clientDemands.houseWidth / 2,
        y3: 1,
        color: clientDemands.roofColor,
      };

      const rectangle: object = {
        type: 'rectangle',
        centerX: 10,
        centerY: 30,
        width: clientDemands.houseWidth,
        height: clientDemands.houseHeight - roofHeight,
        color: clientDemands.bodyColor,
      };

      designer.AddShape(roof);
      designer.AddShape(rectangle);

      const draft = designer.CreateDraft();

      painter.DrawPicture(canvas, draft);
      expect(outputLog).toEqual([
        "Canvas color #fff",
        "Draw triangle",
        "Move to: [10:30]",
        "Draw line: from 150 to 30",
        "Draw line: from 75 to 1",
        "Draw line: from 10 to 30",
        "Draw rectangle: x = 10, y = 30, width = 150, height = 170",
      ]);
    });
  });
});
