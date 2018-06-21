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
  console.log('ellipse left, top, width, height, color');
  console.log('regular_polygon centerX, centerY, numberOfSides, sideSize, color');
  console.log('--------------');
  console.log('Доступные параметры цвета (color) для фигур:');
  console.log(Object.keys(Color).toString());
  console.log('--------------');
  console.log('draw - нарисовать фигуры');
  console.log('help - справка');
  console.log('exit - выход программы');
};

helpView();

readlineSync.promptCLLoop({
  rectangle: (centerX: number, centerY: number, width: number, height: number, color: string) => {
    try {
      pictureDraft.AddShape({
        type: 'rectangle',
        centerX,
        centerY,
        width,
        height,
        color,
      });
    }
    catch (e) {
      console.log(e.message);
    }

  },
  triangle: (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number,
             color: string) => {

    try {
      pictureDraft.AddShape({
        type: 'triangle',
        x1,
        y1,
        x2,
        y2,
        x3,
        y3,
        color,
      });
    }
    catch(e) {
      console.log(e.message);
    }
  },
  ellipse: (left: number, top: number, width: number,
            height: number, color: string) => {
    try {
      pictureDraft.AddShape({
        type: 'ellipse',
        left,
        top,
        width,
        height,
        color,
      });
    }
    catch (e) {
      console.log(e.message);
    }
  },
  regular_polygon: (centerX: number, centerY: number, numberOfSides: number,
                    sideSize: number, color: string) => {
    try {
      pictureDraft.AddShape({
        type: 'regular_polygon',
        centerX,
        centerY,
        numberOfSides,
        sideSize,
        color,
      });
    }
    catch (e) {
      console.log(e.message);
    }
  },
  draw: () => pictureDraft.DrawPicture(new Canvas(console.log)),
  help: () => helpView(),
  exit: () => { return true; },
});
