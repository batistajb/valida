"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var valida_1 = require("@batistajb/valida");
var CPF = '123.456.789-09';
var isValid = (0, valida_1.cpf)(CPF);
console.log("O CPF ".concat(CPF, " \u00E9 v\u00E1lido? ").concat(isValid));
