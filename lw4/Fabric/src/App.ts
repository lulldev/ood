// import validator from 'validator';
import { Client } from "./Client";
import { Designer } from "./Designer";
import { PictureDraft } from "./PictureDraft";

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

const client: object = new Client(startupOptions.clientName);
const designer: object = new Designer();
const pictureDraft: object = new PictureDraft(designer);

// todo: инициализируем объект класса проект

// todo: организуем прием аргументов для фабрики




