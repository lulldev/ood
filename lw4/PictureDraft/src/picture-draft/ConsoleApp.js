"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import validator from 'validator';
const command_line_args_1 = require("command-line-args");
const startupOptionDifinition = [
    { name: 'clientName', alias: 'cn', type: String },
    { name: 'projectName', alias: 'pn', type: String },
];
const startupOptions = command_line_args_1.default(startupOptionDifinition);
if (!startupOptions.hasOwnProperty('clientName') || !startupOptions.hasOwnProperty('clientName')) {
    console.log('Неверно указаны стартовые параметры для начала работы. Параметры:');
    console.log('--clientName=Ivan - имя клиента для проекта');
    console.log('--projectName=PicturesMix - имя для проекта');
    process.exit(1);
}
//# sourceMappingURL=App.js.map