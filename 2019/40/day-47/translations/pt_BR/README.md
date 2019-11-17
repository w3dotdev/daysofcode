# Tipos de dados

## Primitivos

Um primitivo não é um objeto e não possui métodos próprios.

- Boolean — true ou false
- Null — sem valor
- Undefined — uma variável declarada, mas não recebeu um valor
- Number — inteiros, número de ponto flutuante, etc
- BigInt - inteiros, número de ponto flutuante, doubles ou número extenso - https://tc39.es/proposal-bigint/ - https://www.youtube.com/watch?v=RiU5OzMZ7z8 - https://caniuse.com/#feat=bigint - https://github.com/tc39/proposals/blob/master/finished-proposals.md
- String — um array de caracteres
- Symbol — um valor único que não é igual a qualquer outro valor

Todo o resto é do tipo objeto.

Todos os primitivos são imutáveis. É importante não confundir um primitivo em si com uma variável atribuída a um valor primitivo. A variável pode ser reatribuída com um novo valor, mas o valor existente não pode ser alterado da mesma maneira que nos objetos, arrays e funções.

```
// O uso de um método string não altera a string
let bar = "baz";
console.log(bar); // baz

bar.toUpperCase();
console.log(bar); // baz
```

```
// O uso de um método array, modifica o array
let foo = [];
console.log(foo); // []

foo.push("plugh");
console.log(foo); // ["plugh"]
```

```
// A atribuição atribui ao primitivo um novo valor (não alterado)
bar = bar.toUpperCase(); // BAZ
```

## Objetos

Aqui estão alguns dos objetos nativos. Observe que alguns deles também estavam na lista primitiva, mas não os confunda. Eles agem como construtores para criar esses tipos.
Existem dois que são os principais que você usará para suas próprias estruturas:

- Object
- Array

Também existem muitos outros objetos. Abaixo podemos ver alguns:

- Function
- Boolean
- Symbol
- Error
- Number
- String
- RegExp
- Math
- Set
