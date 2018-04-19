const readlineSync = require('readline-sync');

import { Client } from "./Client";
import { Designer } from "./Designer";
import { PictureDraft } from "./PictureDraft";
import { Color } from "./Color";
import { Canvas } from "./Canvas";

const commandLineArgs = require('command-line-args');

const startupOptionDifinition = [
  { name: 'clientName', type: String },
  { name: 'projectName', type: String },
];

const startupOptions = commandLineArgs(startupOptionDifinition);

if (!startupOptions.hasOwnProperty('clientName') || !startupOptions.hasOwnProperty('projectName')) {
  console.log('Неверно указаны стартовые параметры для начала работы. Параметры:');
  console.log('--clientName=Ivan - имя клиента для проекта');
  console.log('--projectName=PicturesMix - имя для проекта');
  process.exit(1);
}

const client: Client = new Client(startupOptions.clientName);
const designer: Designer = new Designer();
const pictureDraft: PictureDraft = new PictureDraft(client, designer);

const helpView = () => {
  console.log('Доступные параметры фигур для добавления фигур:');
  console.log('rectangle centerX centerY width height color');
  console.log('triangle x1, y1, x2, y2, x3, y3, color');
  console.log('ellipse centerX, centerY, horizontalRadius, verticalRadius, color');
  console.log('regular_polygon centerX, centerY, numberOfSides, sideSize, color');
  console.log('--------------');
  console.log('Доступные параметры цвета (color) для фигур:');
  console.log(Object.keys(Color).toString());
  console.log('--------------');
  console.log('draw - нарисовать фигуры');
  console.log('help - справка');
  console.log('exit - выход программы');
};

const validateShapeArgs = (args: object): boolean => {
  const argsArr = Object.keys(args).map(k => args[k]);
  return argsArr.every((val) => {
    return val && !!parseInt(val);
  });
};

const getColorByName = (colorName: string): Color => {
  return Object.keys(Color).indexOf(colorName) !== -1
    ? Color[colorName] : Color.Black;
} ;

helpView();

readlineSync.promptCLLoop({
  rectangle: (centerX: number, centerY: number, width: number, height: number, colorName: string) => {
    if (!validateShapeArgs({centerX, centerY, width, height})) {
      console.log('Введены неверные параметры');
      return;
    }
    const color: Color = getColorByName(colorName);
    pictureDraft.AddShape({
      type: 'rectangle',
      centerX,
      centerY,
      width,
      height,
      color: color,
    });
  },
  triangle: (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number,
             colorName: string) => {
    if (!validateShapeArgs({x1, y1, x2, y2, x3, y3})) {
      console.log('Введены неверные параметры');
      return;
    }
    const color: Color = getColorByName(colorName);
    pictureDraft.AddShape({
      type: 'triangle',
      x1,
      y1,
      x2,
      y2,
      x3,
      y3,
      color: color,
    });
  },
  ellipse: (centerX: number, centerY: number, horizontalRadius: number,
            verticalRadius: number, colorName: string) => {
    if (!validateShapeArgs({centerX, centerY, horizontalRadius, verticalRadius})) {
      console.log('Введены неверные параметры');
      return;
    }
    const color: Color = getColorByName(colorName);
    pictureDraft.AddShape({
      type: 'ellipse',
      centerX,
      centerY,
      horizontalRadius,
      verticalRadius,
      color: color,
    });
  },
  regular_polygon: (centerX: number, centerY: number, numberOfSides: number,
                    sideSize: number, colorName: string) => {
    if (!validateShapeArgs({centerX, centerY, numberOfSides, sideSize})) {
      console.log('Введены неверные параметры');
      return;
    }
    const color: Color = getColorByName(colorName);
    pictureDraft.AddShape({
      type: 'ellipse',
      centerX,
      centerY,
      numberOfSides,
      sideSize,
      color: color,
    });
  },
  draw: () => {
    pictureDraft.DrawPicture(new Canvas());
  },
  help: () => helpView(),
  exit: () => {
    return true;
  }
});
