import {Client} from '../src/picture-draft/Client';
import {Designer} from '../src/picture-draft/Designer';
import {Canvas} from "../src/picture-draft/Canvas";
import {Color} from "../src/picture-draft/Color";

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

    it('Designer init without arguments', () => {
      expect(() => new Designer()).not.toThrow();
    });
  });

  describe('Canvas', () => {

    outputLogClear();
    const canvas = new Canvas(outputHookHelper);

    it('Default canvas color is white', () => {
      expect(canvas.GetCanvasColor()).toEqual(Color.White);
    });

    it('Canvas can set color', () => {
      canvas.SetCanvasColor(Color.Blue);
      expect(canvas.GetCanvasColor()).toEqual(Color.Blue);
      expect(outputLog).toEqual(['Set canvas color #0000ff']);
    });

    it('Canvas return info', () => {
      expect(canvas.GetCanvasInfo()).toEqual('Canvas color #0000ff');
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

});
