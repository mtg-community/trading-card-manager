import './src'

// hotel.js

modules.export = {
  abacate,
  foo: 'foo',
  bar: 'bar',
  baz: 'baz',
  preco: 10,
  funcao: () => 'Bla'
}

// ARQUIVO 2
const hotel = require("./hotel")

console.log(hotel.preco)
