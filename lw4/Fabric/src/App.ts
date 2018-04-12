// import validator from 'validator';
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

// todo: инициализируем объект класса клиент

// todo: инициализируем объект класса проект

// todo: инициализируем объект класса дизайнер (в рамках программы это одна сущность)

// todo: организуем прием аргументов для фабрики




