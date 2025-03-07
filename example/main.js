const valida = require('@batistajb/valida');

function validCpf() {
    let cpf = '123.456.789-09';
    let isValid = valida.cpf(cpf);

    console.log(isValid);
}

function invalidCpf() {

    const cpf = '111.222.333-44';

    const isValid = valida.cpf(cpf);

    console.log(isValid);
}

validCpf();
invalidCpf();