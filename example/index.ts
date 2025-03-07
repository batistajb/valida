import { cpf } from "@batistajb/valida"

const CPF = '123.456.789-09';

const isValid = cpf(CPF);

console.log(`O CPF ${CPF} é válido? ${isValid}`);