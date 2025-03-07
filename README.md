# Função para validar CPF ![npm (scoped)](https://img.shields.io/npm/v/@batistajb/valida?label=version) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/batistajb/valida/Node.js%20CI?label=GitHub%20Actions&logo=github&style=plastic)


<h2>Install package </h2>

```
$ npm install @batistajb/valida
```

<h2> Use package with javascript </h2>

```
const valida = require('@batistajb/valida');

const cpf = '123.456.789-09';
const isValid = valida.cpf(cpf);

console.log(isValid); // true
```
<h2> Use package with typescript </h2>

```typescript
import { cpf } from "@batistajb/valida"

const CPF = '123.456.789-09';

const isValid = cpf(CPF);

console.log(isValid); // true
```

<h2>Test</h2>

```
$ npm run test
```
