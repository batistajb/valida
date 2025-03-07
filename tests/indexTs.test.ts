import { cpf } from "../dist/index";

test("Retorna true se cpf válido", ()=> {
    expect(cpf("343.454.670-71")).toBe(true);
});

test("Retorna false se cpf não for válido", ()=> {
    expect(cpf("123123123123")).toBe(false);
});