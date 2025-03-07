const valida = require('../dist');

test("Retorna true se cpf válido", ()=>{

    expect(valida.cpf("343.454.670-71")).toBe(true);

});

test("Retorna false se cpf não for válido", ()=>{

    expect(valida.cpf("123123123123")).toBe(false);

});